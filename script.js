const container = document.querySelector('.container')
const btnPrimary = document.querySelector('.btn-primary')
const btnDanger = document.querySelector('.btn-danger')
let n = 595
for (let i = 0;i < n; i++){
    const square = document.createElement('div')
    container.append(square)
    square.setAttribute('class','square')
    square.addEventListener('mouseover',() => {
        getStyle(square)
    })
    square.addEventListener('mouseleave',() => {
        square.style.background = ''
        square.style.transform = ''
    })
    btnPrimary.addEventListener('click', () =>{
        square.style.background = `${randomColor()}`})
    btnDanger.addEventListener('click', () =>{
        square.style.background = ""})
}


function getStyle(item){
    item.style.background = `${randomColor()}`
    item.style.transform = 'scale(1.2'
}

function randomColor () {
    let color = '#'
    for (let i = 0;i < 6;i++){
        color += Math.round(Math.random() * 10)
    }
    return color
}