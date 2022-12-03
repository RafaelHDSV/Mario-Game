let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let clouds = document.querySelector('.clouds')
let points = document.getElementById('points')
let gameStart = document.querySelector('.game_start')
let gameBoard = document.querySelector('.game_board')
let btnStart = document.querySelector('.btn_start')
let pointsCounter = 0

btnStart.addEventListener('click', () => {
    window.location.reload()
})

document.addEventListener('keydown', () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})

document.addEventListener('click', () => {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
})

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const pipePositionRight = +window.getComputedStyle(pipe).right.replace('px', '')
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "")
    const cloudsPosition = clouds.offsetLeft

    gameStart.style.display = 'none'
    gameBoard.style.display = 'flex'

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

        gameStart.style.display = 'flex'

    }

    if (pipePositionRight <= 7 && pipePositionRight >= -7) {
        pointsCounter += 1
        points.innerHTML = pointsCounter
    }
}, 10);