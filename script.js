const colorFlipperBtn = document.querySelector('.colorFlipper');
const background = document.querySelector('.bgArea');
const textColor = document.querySelector('.colorCode');
const colorFormat = document.querySelector('.header-colorMode');
let rgbOn = false;

window.onload = () => {background.style['background-color'] = '#F1f5f8'}

colorFormat.addEventListener('click', () => {
    rgbOn = !rgbOn;
    let actualColor = background.style['background-color'];
    let colorChars = '', rgbComp = [];
    if (rgbOn) {
        colorFormat.innerHTML = 'RGB';
        textColor.innerHTML =  `${actualColor}`;
    }else {
        colorFormat.innerHTML = 'HEX';
        colorChars = actualColor.match(/[^[a-z()]/ig).join('');
        rgbComp = colorChars.split(',').map(num => {
            let numDec = parseInt(num, 10);
            return (numDec < 16) ? '0' + numDec.toString(16) : numDec.toString(16);
        });
        textColor.innerHTML = `#${rgbComp.join('')}`
    }
});

colorFlipperBtn.addEventListener('click', () => {
    let newColor = genColor();
    background.style['background-color'] = `#${newColor.join('')}`;
    if (rgbOn) {
        textColor.innerHTML =  `rgb(${newColor.map(n => parseInt(n,16)).join(',')})`;
    } else {
        textColor.innerHTML =  `#${newColor.join('')}`;
    }
    
})

function genColor () {
    const rgbArr = [getRandomInt(0,256), getRandomInt(0,256), getRandomInt(0,256)];
    return rgbArr.map( element => {
        return (element > 15) ? 
                element.toString(16) :
                '0' + element.toString(16);
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }