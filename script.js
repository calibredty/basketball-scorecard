let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score")
let plusOneHome = document.getElementById("home-btn-add-1");
let plusTwoHome = document.getElementById("home-btn-add-2");
let plusThreeHome = document.getElementById("home-btn-add-3");
let plusOneGuest = document.getElementById("guest-btn-add-1");
let plusTwoGuest = document.getElementById("guest-btn-add-1");
let plusThreeGuest = document.getElementById("guest-btn-add-3");

function addOneHome() {
  homeScore += 1
  plusOneHome = homeScoreEl.textContent = homeScore
}

function addTwoHome() {
  homeScore += 2
  plusTwoHome = homeScoreEl.textContent = homeScore
}

function addThreeHome() {
  homeScore += 3
  plusThreeHome = homeScoreEl.textContent = homeScore
}

function addOneGuest() {
  guestScore += 1
  plusOneGuest = guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
  guestScore += 2
  plusTwoGuest = guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
  guestScore += 3
  plusThreeGuest = guestScoreEl.textContent = guestScore
}

function reset() {
  guestScoreEl.textContent = guestScore = 0
  homeScoreEl.textContent = homeScore = 0
}