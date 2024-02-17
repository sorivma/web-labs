const daysBtn = document.getElementById('daysBtn')
const hoursBtn = document.getElementById('hoursBtn')
const minutesBtn = document.getElementById('minutesBtn')
const secondsBtn = document.getElementById('secondsBtn')

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

function attachEventsListeners() {
    daysBtn.addEventListener('click', daysListener)
    hoursBtn.addEventListener('click', hoursListener)
    minutesBtn.addEventListener('click', minutesListener)
    secondsBtn.addEventListener('click', secondsListener)
}

function daysListener() {
    hours.value = parseInt(days.value) * 24
    minutes.value = parseInt(days.value) * 24 * 60
    seconds.value = parseInt(days.value) * 24 * 60 * 60
}

function hoursListener() {
    days.value = parseInt(hours.value) / 24
    minutes.value = parseInt(hours.value) * 60
    seconds.value = parseInt(hours.value) * 60 * 60
}

function minutesListener() {
    days.value = (parseInt(minutes.value) / 60) / 24
    hours.value = parseInt(minutes.value) / 60
    seconds.value = parseInt(minutes.value) * 60
}

function secondsListener() {
    days.value = ((parseInt(seconds.value) / 60) / 60) / 24
    hours.value = (parseInt(seconds.value) / 60) / 60
    minutes.value = parseInt(seconds.value) / 60
}