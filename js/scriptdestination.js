//function to disable hover-dependent functions on mobile platforms
function watchForHover() {
  let lastTouchTime = 0

function enableHover() {
  if (new Date() - lastTouchTime < 500) return
  document.body.classList.add('hasHover')
}

function disableHover() {
  document.body.classList.remove('hasHover')
}

function updateLastTouchTime() {
  lastTouchTime = new Date()
}

document.addEventListener('touchstart', updateLastTouchTime, true)
document.addEventListener('touchstart', disableHover, true)
document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

watchForHover()

//function to scroll to top of page on button click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
