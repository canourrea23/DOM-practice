console.log('UmmpaLummpa')


const blue = document.getElementById('blue');
const red = document.getElementById('red')
const green = document.getElementById('green')
// const square = document.getElementById('square')
const tog = document.getElementById('slider-round')

console.log(blue.attributes.key)
//dark-mode not working yet
//{red state ? do tha thing}
//check color add conditional and interperlate 
const background = {
    blueColor: 'blue',
}

//if background color is X then do this 
//toggles if true add body style ='color'
tog.addEventListener('click', () => {
    let initialBackgroundColor = document.body.style.backgroundColor;
    let staticBackgroundColor = new String(document.body.style.backgroundColor).valueOf()
    
    if (initialBackgroundColor !== "black") {
        tog.toggle = document.body.style.backgroundColor = 'black'
        console.log('tog')
    } else {
        tog.toggle = document.body.style.backgroundColor = 'white'
        console.log('green3')
    }
    // } else {
    //     console.log(initialBackgroundColor, 'initial color')
    //     console.log(staticBackgroundColor, 'called')
    //     document.body.style.backgroundColor = staticBackgroundColor
    // }
})

document.body.style.backgroundColor = 'purple'
console.log(document.body.style.backgroundColor,"haha")

blue.addEventListener('click', () => {
    document.body.style.backgroundColor = background.blueColor;
    console.log('ahh')
})

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    console.log('jello')
})

green.addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightgreen'
})

square.addEventListener('click', () => {
    let makeSquare = document.createElement('div')
    makeSquare.className = 'square'
    document.body.appendChild(makeSquare)
    console.log(makeSquare)
})

triangle.addEventListener('click', () => {
    let makeTriangle = document.createElement('div')
    makeTriangle.className = "triangle"
    document.body.appendChild(makeTriangle)
})

deleteTriangle.addEventListener('click', () => {
    let removeTriangle = document.querySelectorAll('.triangle')
    removeTriangle[0].remove()
    console.log('boom', removeTriangle)
})

circle.addEventListener('click', () => {
    let makeCircle = document.createElement('div')
    makeCircle.className = "circle"
    document.body.appendChild(makeCircle)
})

deleteCircle.addEventListener('click', () => {
    let removeCircle = document.querySelectorAll('.circle')
    removeCircle[0].remove()
})

squareColor.addEventListener('click', () => {
    let sC = document.querySelectorAll('.square')
    for (let i = 0; i < sC.length; i++)
    sC[i].style.backgroundColor = 'green'
})
// console.log(document.body.style(`${backgroundColor}`))
// document.body.style(b)