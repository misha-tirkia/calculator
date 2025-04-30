let input = document.querySelector('.input');
let output = document.querySelector('.output');


let clr = () => {
    input.innerText = '0'
    output.innerText = '0'
};

let addnum = (num) => {
    if(input.innerText === '0') {
        input.innerText = num
    } else {
        input.innerText += num
    }
}

let addchar = (char) => {
    input.innerText += char
}

let calcinp = () => {
    let result = eval(input.innerText)
    output.innerText = result
}