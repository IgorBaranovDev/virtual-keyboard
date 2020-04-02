const body = document.querySelector('body');
const textInput = document.createElement('textarea');
const keyboard = document.createElement('div');

keyboard.classList.add('keyboard');
textInput.classList.add('textarea');
body.appendChild(textInput);
body.appendChild(keyboard);

const keys = {
  eng: [
    [
      '`',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '-',
      '=',
      'backspace'
    ],
    [
      'tab',
      'q',
      'w',
      'e',
      'r',
      't',
      'y',
      'u',
      'i',
      'o',
      'p',
      '[',
      ']',
      '\\',
      'delete'
    ],
    [
      'capslock',
      'a',
      's',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      ';',
      "'",
      'enter'
    ],
    [
      'shift',
      'z',
      'x',
      'c',
      'v',
      'b',
      'n',
      'm',
      ',',
      '.',
      '/',
      'arrowUp',
      'shift'
    ],
    [
      'ctrl',
      'win',
      'alt',
      'space',
      'alt',
      'ctrl',
      'arrowLeft',
      'arrowDown',
      'arrowRight'
    ]
  ]
};

!localStorage.language ? (localStorage.language = 'eng') : null;

function createKeyboard(language) {
  keys[language].forEach(element => {
    const lineOfkeys = document.createElement('div');
    lineOfkeys.classList.add('lineOfkeys');
    keyboard.appendChild(lineOfkeys);
    element.forEach(key => {
      console.log(key);
      lineOfkeys.append(createButtons(key));
    });
  });
}

function createButtons(key) {
  const button = document.createElement('div');
  button.classList.add('key');
  button.innerText = key;
  return button;
}

createKeyboard(localStorage.language);
