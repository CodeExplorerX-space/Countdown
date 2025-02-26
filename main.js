let countdown = document.querySelector('.countdown')
let stop = document.querySelector('.stop')
let countNumber = 10
let colors = ['#F28D35', '#3A86FF', '#8338EC', '#FF006E', '#06D6A0', '#FFD166', '#EF476F', '#118AB2', '#073B4C', '#9B5DE5', '#F15BB5', '#00F5D4', '#AACC00', '#5C374C', '#B56576', '#E56B6F', '#6D597A', '#355070', '#D4A373', '#3D348B']

function countdownFunction(){
    countNumber--
    countdown.innerHTML = countNumber
    countdown.style.color = colors[Math.floor(Math.random() * 20)];

    if(countNumber === 0){
        clearInterval(stopInterval)
        countdown.style.display = 'none'
        stop.style.display = 'block'
    }
}

let  stopInterval = setInterval(countdownFunction, 1000)