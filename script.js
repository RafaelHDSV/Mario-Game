let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let clouds = document.querySelector('.clouds')
let points = document.getElementById('points')
let pointsCounter = 0

document.addEventListener('keydown', () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "")
    const cloudsPosition = clouds.offsetLeft

    if (pipePosition <= 120 && marioPosition < 80 && pipePosition > 0) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = 'images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        clearInterval(loop)
    }

    // if (+window.getComputedStyle(pipe).right.replace('rem', '') >= -5) {
    //     pointsCounter += 1
    //     points.innerHTML = pointsCounter
    // }
}, 10);