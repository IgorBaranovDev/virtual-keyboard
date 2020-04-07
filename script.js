const body = document.querySelector('body');
const textInput = document.createElement('textarea');

textInput.classList.add('textarea');
body.appendChild(textInput);

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
      'backspace',
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
      'delete',
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
      'enter',
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
      'shift',
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
      'arrowRight',
    ],
  ],
  engShift: [
    [
      '~',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '_',
      '+',
      'bacspace',
    ],
    [
      'tab',
      'Q',
      'W',
      'E',
      'R',
      'T',
      'Y',
      'U',
      'I',
      'O',
      'P',
      '{',
      '}',
      '|',
      'delete',
    ],
    [
      'capslock',
      'A',
      'S',
      'D',
      'F',
      'G',
      'H',
      'J',
      'K',
      'L',
      ':',
      '"',
      'enter',
    ],
    [
      'shift',
      'Z',
      'X',
      'C',
      'V',
      'B',
      'N',
      'M',
      '<',
      '>',
      '?',
      'arrowUp',
      'shift',
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
      'arrowRight',
    ],
  ],
  ru: [
    [
      'ё',
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
      'backspace',
    ],
    [
      'tab',
      'й',
      'ц',
      'у',
      'к',
      'е',
      'н',
      'г',
      'ш',
      'щ',
      'з',
      'х',
      'ъ',
      '\\',
      'delete',
    ],
    [
      'capslock',
      'ф',
      'ы',
      'в',
      'а',
      'п',
      'р',
      'о',
      'л',
      'д',
      'ж',
      'э',
      'enter',
    ],
    [
      'shift',
      'я',
      'ч',
      'с',
      'м',
      'и',
      'т',
      'ь',
      'б',
      'ю',
      '.',
      'arrowUp',
      'shift',
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
      'arrowRight',
    ],
  ],
  ruShift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '+', 'backspase'],
    [
      'tab',
      'Й',
      'Ц',
      'У',
      'К',
      'Е',
      'Н',
      'Г',
      'Ш',
      'Щ',
      'З',
      'Х',
      'Ъ',
      '/',
      'delete',
    ],
    [
      'capslock',
      'Ф',
      'Ы',
      'В',
      'А',
      'П',
      'Р',
      'О',
      'Л',
      'Д',
      'Ж',
      'Э',
      'enter',
    ],
    [
      'shift',
      'Я',
      'Ч',
      'С',
      'М',
      'И',
      'Т',
      'Ь',
      'Б',
      'Ю',
      ',',
      'arrowUp',
      'shift',
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
      'arrowRight',
    ],
  ],
};

!localStorage.language ? (localStorage.language = 'eng') : null;

function createKeyboard(language) {
  if (document.querySelector('.keyboard')) {
    document.querySelector('.keyboard').remove();
  }
  const keyboard = document.createElement('div');

  keyboard.classList.add('keyboard');
  keys[language].forEach((element) => {
    const lineOfkeys = document.createElement('div');
    lineOfkeys.classList.add('lineOfkeys');
    keyboard.appendChild(lineOfkeys);
    element.forEach((key) => {
      // console.log(key);
      lineOfkeys.append(createButtons(key));
    });
  });
  body.appendChild(keyboard);
}

function createButtons(key) {
  const button = document.createElement('div');
  button.classList.add('key');
  button.innerText = key;
  return button;
}

let shiftFlag = false;
let altLeft = false;

function keyPress(event) {
  if (event.code === 'ShiftLeft') {
    shiftFlag = true;
  }

  if (event.code === 'AltLeft') {
    altLeft = true;
  }

  if (
    (event.code === 'AltLeft' && shiftFlag === true) ||
    (event.code === 'ShiftLeft' && altLeft === true)
  ) {
    console.log('ru');
    if (localStorage.language === 'eng') {
      localStorage.language = 'ru';

      createKeyboard(localStorage.language);
    } else {
      localStorage.language = 'eng';

      createKeyboard(localStorage.language);
    }
  }
}
function keyUp(event) {
  if (event.key === 'Shift' && event.key === 'Alt') {
    if (localStorage.language === 'eng') {
      localStorage.language = 'ru';
      createKeyboard(localStorage.language);
    } else {
      localStorage.language = 'eng';
      createKeyboard(localStorage.language);
    }
  }
}

createKeyboard(localStorage.language);

document.addEventListener('keydown', keyPress);

document.addEventListener('keyUp', keyUp);
