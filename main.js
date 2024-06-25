// Room objects
const rooms = [
  {
    name: "Living Room",
    currTemp: 30,
    coldPreset: 20,
    warmPreset: 35,

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
    currTemp: 28,
    coldPreset: 20,
    warmPreset: 35,

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
    currTemp: 29,
    coldPreset: 20,
    warmPreset: 35,

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
    currTemp: 24,
    coldPreset: 20,
    warmPreset: 35,

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

// Handle the dropdown data
const roomSelect = document.getElementById("rooms");

const currentTemp = document.getElementById("temp");

let selectedRoom = rooms[0].name;

// Set default temperature
currentTemp.textContent = `${rooms[0].currTemp}°`;

console.log(currentTemp.textContent);

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

  //   set the current stats to current room temperature
  currentTemp.textContent = `${room.currTemp}°`;
});

// Set current temperature to to cold or warm preset
const defaultSettings = document.querySelector(".default-settings");
defaultSettings.addEventListener("click", function (e) {});

// Increase and decrease temperature
document.getElementById("increase").addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.increaseTemp();

  currentTemp.textContent = `${room.currTemp}°`;
});

document.getElementById("reduce").addEventListener("click", () => {
  const room = rooms.find((currRoom) => currRoom.name === selectedRoom);

  room.decreaseTemp();

  currentTemp.textContent = `${room.currTemp}°`;
});
