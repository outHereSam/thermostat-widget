// Room objects
const rooms = [
  {
    name: "Living Room",
    currTemp: 32,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/living-room.jpg",

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp--;
    },

    increaseTemp() {
      this.currTemp++;
    },
  },
  {
    name: "Kitchen",
    currTemp: 29,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/kitchen.jpg",

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp--;
    },

    increaseTemp() {
      this.currTemp++;
    },
  },
  {
    name: "Bathroom",
    currTemp: 30,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/bathroom.jpg",

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp--;
    },

    increaseTemp() {
      this.currTemp++;
    },
  },
  {
    name: "Bedroom",
    currTemp: 31,
    coldPreset: 20,
    warmPreset: 32,
    image: "./assets/bedroom.jpg",

    setCurrTemp(temp) {
      this.currTemp = temp;
    },

    setColdPreset(newCold) {
      this.coldPreset = newCold;
    },

    setWarmPreset(newWarm) {
      this.warmPreset = newWarm;
    },

    decreaseTemp() {
      this.currTemp--;
    },

    increaseTemp() {
      this.currTemp++;
    },
  },
];

// Set svg accordingly
const svgPoint = document.querySelector(".point");
const angleOffset = 86;
const calculatePointPosition = (currTemp) => {
  const normalizedTemp = (currTemp - 10) / (32 - 10);
  const angle = normalizedTemp * 180 + angleOffset;

  const radians = (angle * Math.PI) / 180;
  const radius = 116;

  const translateX = radius * Math.cos(radians);
  const translateY = radius * Math.sin(radians);

  return { translateX, translateY };
};

const setIndicatorPoint = (currTemp) => {
  const position = calculatePointPosition(currTemp);
  svgPoint.style.transform = `translate(${position.translateX}px, ${position.translateY}px)`;
};

// Handle the dropdown data
const roomSelect = document.getElementById("rooms");

const currentTemp = document.getElementById("temp");

let selectedRoom = rooms[0].name;

// Set default temperature
currentTemp.textContent = `${rooms[0].currTemp}°`;
setIndicatorPoint(rooms[0].currTemp);

document.querySelector(
  ".room"
).style.backgroundImage = `url('${rooms[0].image}')`;

document.querySelector(".currentTemp").innerText = `${rooms[0].currTemp}°`;
// Add new options from rooms array
rooms.forEach((room) => {
  const option = document.createElement("option");
  option.value = room.name;
  option.textContent = room.name;
  roomSelect.appendChild(option);
});

// Set current temperature to currently selected room
roomSelect.addEventListener("change", function () {
  selectedRoom = this.value;

  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);
  setIndicatorPoint(room.currTemp);

  //   set the current stats to current room temperature
  currentTemp.textContent = `${room.currTemp}°`;

  // Set the current room image
  document.querySelector(
    ".room"
  ).style.backgroundImage = `url('${room.image}')`;

  // Set the current room name
  document.querySelector(".room-name").innerText = selectedRoom;

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

// Set current temperature to to cold or warm preset
const defaultSettings = document.querySelector(".default-settings");
defaultSettings.addEventListener("click", function (e) {});

// Increase and decrease temperature
document.getElementById("increase").addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  if (room.currTemp < 32) {
    room.increaseTemp();
  }

  setIndicatorPoint(room.currTemp);
  currentTemp.textContent = `${room.currTemp}°`;

  warmBtn.style.backgroundColor = "#d9d9d9";
  coolBtn.style.backgroundColor = "#d9d9d9";

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

document.getElementById("reduce").addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  if (room.currTemp > 10) {
    room.decreaseTemp();
  }

  setIndicatorPoint(room.currTemp);
  currentTemp.textContent = `${room.currTemp}°`;

  warmBtn.style.backgroundColor = "#d9d9d9";
  coolBtn.style.backgroundColor = "#d9d9d9";

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

const coolBtn = document.getElementById("cool");
const warmBtn = document.getElementById("warm");

// Set preset temperatures
coolBtn.addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.setCurrTemp(room.coldPreset);
  setIndicatorPoint(room.coldPreset);

  currentTemp.textContent = `${room.currTemp}°`;

  warmBtn.style.backgroundColor = "#d9d9d9";
  coolBtn.style.backgroundColor = "#adbaff";

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

warmBtn.addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.setCurrTemp(room.warmPreset);
  setIndicatorPoint(room.warmPreset);

  currentTemp.textContent = `${room.currTemp}°`;

  coolBtn.style.backgroundColor = "#d9d9d9";
  warmBtn.style.backgroundColor = "#ff9799";

  document.querySelector(".currentTemp").innerText = `${room.currTemp}°`;
});

const inputsDiv = document.querySelector(".inputs");
// Toggle preset inputs
document.getElementById("newPreset").addEventListener("click", () => {
  if (inputsDiv.classList.contains("hidden")) {
    inputsDiv.classList.remove("hidden");
  }
});

// close inputs
document.getElementById("close").addEventListener("click", () => {
  inputsDiv.classList.add("hidden");
});

// handle preset input data
document.getElementById("save").addEventListener("click", () => {
  const coolInput = document.getElementById("coolInput");
  const warmInput = document.getElementById("warmInput");
  const errorSpan = document.querySelector(".error");

  if (coolInput.value && warmInput.value) {
    // Validate the data
    if (coolInput.value < 10 || coolInput.value > 22) {
      errorSpan.style.display = "block";
      errorSpan.innerText = "Enter valid temperatures (10° - 32°)";
    }

    if (warmInput.value < 22 || warmInput.value > 32) {
      errorSpan.style.display = "block";
      errorSpan.innerText = "Enter valid temperatures (10° - 32°)";
    }
    // Validation passed
    // Set current room's presets
    const currRoom = rooms.find((room) => room.name === selectedRoom);

    currRoom.setColdPreset(coolInput.value);
    currRoom.setWarmPreset(warmInput.value);

    coolInput.value = "";
    warmInput.value = "";
  }
});
