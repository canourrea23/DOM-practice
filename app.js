console.log('UmmpaLummpa')


const blue = document.getElementById('blue');
const red = document.getElementById('red')
const white = document.getElementById('white')
// const square = document.getElementById('square')
const tog = document.getElementById('slider-round')


//dark-mode not working yet


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
    document.body.style.backgroundColor = 'blue';
    console.log('ahh')
})

red.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    console.log('jello')
})

white.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white'
})

square.addEventListener('click', () => {
    
    let makeSquare = document.createElement('div')
    makeSquare.className = 'square'
    document.body.appendChild(makeSquare)
    //create ele let new div = document.createelement('div)
    // let square = document.createElement.apply('div')
    // square.classList
    
    console.log(makeSquare)
})

triangle.addEventListener('click', () => {
    let makeTriangle = document.createElement('div')
    makeTriangle.className = "triangle"
    document.body.appendChild(makeTriangle)
})
//switch is = 0
// switch is = 1 