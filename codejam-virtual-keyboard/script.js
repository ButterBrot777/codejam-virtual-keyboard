/* eslint no-undef: "error" */
/* eslint-env browser */
const wrapper = document.createElement('div');
const keyboard = document.createElement('div');
const textArea = document.createElement('textarea');
const howToUse = document.createElement('div');

const language = {
  lang: 'en',
};

let isShifted = false;

// create page
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

textArea.classList.add('text-area');
wrapper.appendChild(textArea);

keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

howToUse.classList.add('user-information');
wrapper.appendChild(howToUse);

howToUse.innerHTML = '<p>Keyboard was created on iOS</p>';
howToUse.innerHTML += '<p>To change language press option+space(iOS)</p>';
howToUse.innerHTML += '<p>or leftAlt+space(Windows)</p>';

// keyboard sets
const buttonContentEnDownCase = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
  ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift right'],
  ['lang', 'control', 'option', 'command', 'space', 'command', 'option', '←', '↓', '→'],
  ['↑'],

];
/* eslint no-useless-escape: "error" */
const buttonContentEnUpperCase = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'delete'],
  ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'],
  ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
  ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift right'],
  ['lang', 'control', 'option', 'command', 'space', 'command', 'option', '←', '↓', '→'],
  ['↑'],
];

const buttonContentRuDownCase = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
  ['caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter'],
  ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift right'],
  ['язык', 'control', 'option', 'command', 'пробел', 'command', 'option', '←', '↓', '→'],
  ['↑'],
];

const buttonContentRuUpperCase = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'delete'],
  ['tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\'],
  ['caps lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter'],
  ['shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'shift right'],
  ['язык', 'control', 'option', 'command', 'пробел', 'command', 'option', '←', '↓', '→'],
  ['↑'],
];

const keyCode = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['lang', 'ControlLeft', 'AltLeft', 'MetaLeft', 'Space', 'MetaRight', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
  ['ArrowUp'],
];

// drow keyboard
function drowKeyBoard(keyboardType) {
  keyboard.innerHTML = '';

  keyboardType.forEach((elems, indexRow) => {
    const row = document.createElement('div');
    row.classList.add('row', `row${indexRow}`);

    elems.forEach((elem, indexElem) => {
      const btn = document.createElement('button');
      const code = keyCode[indexRow][indexElem];
      btn.classList.add('button', `button${indexElem}`, code);
      btn.textContent = elem;

      row.appendChild(btn);
    });
    keyboard.appendChild(row);
  });
}
drowKeyBoard(buttonContentEnDownCase, keyCode);

function localStorageHandler() {
  const currentLanguage = localStorage.language;
  if (currentLanguage === 'en') drowKeyBoard(buttonContentEnDownCase, keyCode);
  if (currentLanguage === 'ru') drowKeyBoard(buttonContentRuDownCase, keyCode);
}

function languageHandler() {
  if (language.lang === 'en') {
    drowKeyBoard(buttonContentRuDownCase, keyCode);
    language.lang = 'ru';
    localStorage.setItem('language', 'ru');
  } else {
    drowKeyBoard(buttonContentEnDownCase, keyCode);
    language.lang = 'en';
    localStorage.setItem('language', 'en');
  }
}

function shiftHandler(keyboardRu, keyboardEn) {
  const currentLanguage = localStorage.language;
  if (currentLanguage === 'en') drowKeyBoard(keyboardEn, keyCode);
  if (currentLanguage === 'ru') drowKeyBoard(keyboardRu, keyCode);
}

// switch language by option+space(iOS) of alt+space(Windows)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && (event.ctrlKey || event.altKey)) {
    event.preventDefault();
    languageHandler(language);
  }
});

document.addEventListener('keydown', (event) => {
  const button = document.getElementsByClassName(event.code)[0];
  button.classList.add('active');

  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight')) {
    shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase, keyCode);
    button.classList.add('active');
  }

  if (button.classList.contains('CapsLock')) {
    button.classList.toggle('active');
    event.preventDefault();
    if (isShifted) {
      shiftHandler(buttonContentRuDownCase, buttonContentEnDownCase);
      isShifted = false;
    } else {
      shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase);
      isShifted = true;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const button = document.getElementsByClassName(event.code)[0];
  button.classList.remove('active');

  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight')) {
    shiftHandler(buttonContentRuDownCase, buttonContentEnDownCase, keyCode);
  }
});

// document.addEventListener('keypress', event => {
//   const capsLock = document.getElementsByClassName('CapsLock');
//   console.log('caps was pressed')
// })

// localStorage on reloading page
window.addEventListener('DOMContentLoaded', () => {
  localStorageHandler();
  language.lang = localStorage.getItem('language');
});

// mouse ivents
keyboard.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('button')) {
    if (!target.classList.contains('Tab')) if (!target.classList.contains('CapsLock')) if (!target.classList.contains('Enter')) if (!target.classList.contains('Space')) if (!target.classList.contains('MetaLeft')) if (!target.classList.contains('MetaRight')) if (!target.classList.contains('MetaRight')) if (!target.classList.contains('Backspace')) if (!target.classList.contains('ShiftLeft')) if (!target.classList.contains('ShiftRight')) if (!target.classList.contains('AltLeft')) if (!target.classList.contains('AltRight')) if (!target.classList.contains('ControlLeft')) if (!target.classList.contains('lang')) textArea.value += target.textContent;

    // target.classList.add('button:active');
  }

  if (target.classList.contains('Backspace')) {
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    if (startPos === 0 && endPos === 0) {
      textArea.focus();
    } else {
      textArea.value = textArea.value.substring(0, startPos - 1)
        + textArea.value.substring(endPos, textArea.value.length);
      textArea.selectionStart = startPos - 1;
      textArea.selectionEnd = endPos - 1;
      textArea.focus();
    }
  }

  if (target.classList.contains('CapsLock')) {
    document.querySelectorAll('button').forEach((button) => {
      if (button.textContent.length === 1) {
        // button.textContent = button.textContent.toUpperCase();
        button.classList.toggle('capsLocked');
      }
    });
  }

  if (target.classList.contains('Tab')) {
    textArea.value += '\t';
  }

  if (target.classList.contains('Space')) {
    textArea.value += ' ';
  }

  if (target.classList.contains('Enter')) {
    textArea.value += '\n';
  }

  if (target.classList.contains('lang')) {
    languageHandler(language);
  }

  if (target.classList.contains('ShiftLeft') || target.classList.contains('ShiftRight')) {
    if (isShifted) {
      shiftHandler(buttonContentRuDownCase, buttonContentEnDownCase);
      isShifted = false;
    } else {
      shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase);
      isShifted = true;
    }
  }

  textArea.focus();
});
