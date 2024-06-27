// Room objects
const rooms = [
  {
    name: "Living Room",
    currTemp: 32,
    coldPreset: 20,
    warmPreset: 32,

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

const setIndicatorPoint = (currTemp) => {
  switch (currTemp) {
    case 10:
      svgPoint.style.transform = "translate(120px, 136px)";
      break;
    case 11:
      svgPoint.style.transform = "translate(100px, 136px)";
      break;
    case 12:
      svgPoint.style.transform = "translate(90px, 134px)";
      break;
    case 13:
      svgPoint.style.transform = "translate(80px, 130px)";
      break;
    case 14:
      svgPoint.style.transform = "translate(70px, 128px)";
      break;
    case 15:
      svgPoint.style.transform = "translate(60px, 123px)";
      break;
    case 16:
      svgPoint.style.transform = "translate(50px, 116px)";
      break;
    case 17:
      svgPoint.style.transform = "translate(40px, 108px)";
      break;
    case 18:
      svgPoint.style.transform = "translate(30px, 98px)";
      break;
    case 19:
      svgPoint.style.transform = "translate(20px, 86px)";
      break;
    case 20:
      svgPoint.style.transform = "translate(10px, 68px)";
      break;
    case 21:
      svgPoint.style.transform = "translate(0px, 42px)";
      break;
    case 22:
      svgPoint.style.transform = "translate(-2px, 0px)";
      break;
    case 23:
      svgPoint.style.transform = "translate(0px, -10px)";
      break;
    case 24:
      svgPoint.style.transform = "translate(2px, -20px)";
      break;
    case 25:
      svgPoint.style.transform = "translate(5px, -30px)";
      break;
    case 26:
      svgPoint.style.transform = "translate(10px, -40px)";
      break;
    case 27:
      svgPoint.style.transform = "translate(15px, -50px)";
      break;
    case 28:
      svgPoint.style.transform = "translate(20px, -60px)";
      break;
    case 29:
      svgPoint.style.transform = "translate(28px, -68px)";
      break;
    case 30:
      svgPoint.style.transform = "translate(38px, -78px)";
      break;
    case 31:
      svgPoint.style.transform = "translate(48px, -88px)";
      break;
    case 32:
      svgPoint.style.transform = "translate(58px, -94px)";
      break;

    default:
      svgPoint.style.transform = "translate(1px, -10px)";
  }
};

// Handle the dropdown data
const roomSelect = document.getElementById("rooms");

const currentTemp = document.getElementById("temp");

let selectedRoom = rooms[0].name;

// Set default temperature
currentTemp.textContent = `${rooms[0].currTemp}°`;
setIndicatorPoint(rooms[0].currTemp);

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
});

const coolBtn = document.getElementById("cool");
const warmBtn = document.getElementById("warm");

// Set preset temperatures
coolBtn.addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.setCurrTemp(room.coldPreset);
  setIndicatorPoint(room.currTemp);

  currentTemp.textContent = `${room.currTemp}°`;

  warmBtn.style.backgroundColor = "#d9d9d9";
  coolBtn.style.backgroundColor = "#adbaff";
});

warmBtn.addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.setCurrTemp(room.warmPreset);
  setIndicatorPoint(room.currTemp);

  currentTemp.textContent = `${room.currTemp}°`;

  coolBtn.style.backgroundColor = "#d9d9d9";
  warmBtn.style.backgroundColor = "#ff9799";
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
