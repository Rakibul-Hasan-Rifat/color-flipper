document.querySelector('button').addEventListener('click', () => {
    const mainTag = document.querySelector('main');
    let randomRGBColorCode = rgbColorGenerator();
    mainTag.style.backgroundColor = randomRGBColorCode;
    document.querySelector('main h1 span').innerText = randomRGBColorCode;
})

const randomNumberGenerator = () => Math.floor(Math.random() * 256);

const rgbColorGenerator = () => {
    let numbers = [];
    for (let i = 0; i < 3; i++) {
        numbers.push(randomNumberGenerator());
    }
    const [r, g, b] = numbers;
    return `rgb(${r}, ${g}, ${b})`;
};