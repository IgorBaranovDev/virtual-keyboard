const body = document.querySelector('body');
const textInput = document.createElement('textarea');
let shiftFlag = false;
let altLeftFlag = false;
let capslockFlag = false;

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
      'Backspace',
    ],
    [
      'Tab',
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
      'Delete',
    ],
    [
      'CapsLock',
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
      'Enter',
    ],
    [
      'Shift',
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
      'ArrowUp',
      'Shift',
    ],
    [
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'Ctrl',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
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
      'Bacspace',
    ],
    [
      'Tab',
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
      'Delete',
    ],
    [
      'CapsLock',
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
      'Enter',
    ],
    [
      'Shift',
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
      'ArrowUp',
      'Shift',
    ],
    [
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'Ctrl',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
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
      'Backspace',
    ],
    [
      'Tab',
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
      'Delete',
    ],
    [
      'CapsLock',
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
      'Enter',
    ],
    [
      'Shift',
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
      'ArrowUp',
      'Shift',
    ],
    [
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'Ctrl',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
    ],
  ],
  ruShift: [
    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '+', 'Backspase'],
    [
      'Tab',
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
      'Delete',
    ],
    [
      'CapsLock',
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
      'Enter',
    ],
    [
      'Shift',
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
      'ArrowUp',
      'Shift',
    ],
    [
      'Ctrl',
      'Win',
      'Alt',
      'Space',
      'Alt',
      'Ctrl',
      'ArrowLeft',
      'ArrowDown',
      'ArrowRight',
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
  button.id = key;
  button.innerText = key;
  button.addEventListener('mousedown', (event) => {
    event.key = event.target.id;
    keyPress(event);
  });
  button.addEventListener('mouseup', (event) => {
    event.key = event.target.id;
    keyUp(event);
  });
  return button;
}

function keyPress(event) {
  if (event.code === 'ShiftLeft') {
    shiftFlag = true;
    return;
  }

  if (event.code === 'AltLeft' && shiftFlag === true) {
    if (localStorage.language === 'eng') {
      console.log('change');
      localStorage.language = 'ru';
      createKeyboard(localStorage.language);
    } else {
      localStorage.language = 'eng';
      createKeyboard(localStorage.language);
    }
  }

  if (event.code === 'AltLeft') {
    altLeftFlag = true;
    return;
  }

  if (event.code === 'ShiftLeft' && altLeftFlag === true) {
    if (localStorage.language === 'eng') {
      localStorage.language = 'ru';
      createKeyboard(localStorage.language);
    } else {
      localStorage.language = 'eng';
      createKeyboard(localStorage.language);
    }
  }

  if (event.code === 'Tab') {
    event.preventDefault();
    textInput.value += '  ';
    return;
  }

  if (event.key === 'CapsLock') {
    event.preventDefault();
    console.log(event.key);
    if (!capslockFlag) {
      if (localStorage.language === 'eng') createKeyboard('engShift');
      else createKeyboard('ruShift');
      capslockFlag = true;
    } else {
      if (localStorage.language === 'eng') createKeyboard('eng');
      else createKeyboard('ru');
      capslockFlag = false;
    }
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    textInput.value += '\n';
    return;
  }

  if (event.key === ' ') {
    textInput.value += ' ';
    return;
  }

  textInput.value += event.key;
}

function keyUp(event) {
  if (event.code === 'ShiftLeft') {
    event.preventDefault();
    shiftFlag = false;
    return;
  }
  if (event.code === 'AltLeft') {
    event.preventDefault();
    altLeftFlag = false;
    return;
  }

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
