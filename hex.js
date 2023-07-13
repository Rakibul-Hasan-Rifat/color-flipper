const colorCodeLetters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('button').addEventListener('click', () => {
    const mainTag = document.querySelector('main');
    let randomColorCode = `#${colorFinderLoop()}`;
    mainTag.style.backgroundColor = randomColorCode;
    document.querySelector('main h1 span').innerText = randomColorCode;
})

const colorFinderLoop = () => {
    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        hexCode += colorCodeLetters[randomNumberGenerator()];
    }
    return hexCode;
}

const randomNumberGenerator = () => {
    let randomNumber = Math.floor(Math.random() * colorCodeLetters.length);
    return randomNumber;
}