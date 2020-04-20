const wrapper = document.createElement('div');
const keyboard = document.createElement('div');
const textArea = document.createElement('textarea');
const howToUse = document.createElement('div');

const language = {
  lang: 'en',
};

let isShiftPressed = false;

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
const buttonContentEnLowerCase = [
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

const buttonContentRuLowerCase = [
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

const exceptions = ['Tab', 'CapsLock', 'Enter', 'Space', 'MetaLeft', 'MetaRight', 'Backspace', 'ShiftLeft', 'ShiftRight',
  'ShiftRight', 'AltLeft', 'AltRight', 'ControlLeft', 'lang'];

// draw keyboard
function drawKeyBoard(keyboardType) {
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
drawKeyBoard(buttonContentEnLowerCase, keyCode);

function localStorageHandler() {
  const currentLanguage = localStorage.language;
  if (currentLanguage === 'en') drawKeyBoard(buttonContentEnLowerCase, keyCode);
  if (currentLanguage === 'ru') drawKeyBoard(buttonContentRuLowerCase, keyCode);
}

function toggleLangueage() {
  if (language.lang === 'en') {
    drawKeyBoard(buttonContentRuLowerCase, keyCode);
    language.lang = 'ru';
    localStorage.setItem('language', 'ru');
  } else {
    drawKeyBoard(buttonContentEnLowerCase, keyCode);
    language.lang = 'en';
    localStorage.setItem('language', 'en');
  }
}

function shiftHandler(keyboardRu, keyboardEn) {
  const currentLanguage = localStorage.language;
  if (currentLanguage === 'en') drawKeyBoard(keyboardEn, keyCode);
  if (currentLanguage === 'ru') drawKeyBoard(keyboardRu, keyCode);
}

// switch language by option+space(iOS) of alt+space(Windows)
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && (event.ctrlKey || event.altKey)) {
    event.preventDefault();
    toggleLangueage(language);
  }
});

document.addEventListener('keydown', (event) => {
  const button = document.getElementsByClassName(event.code)[0];
  button.classList.add('active');
  const shiftLeft = button.classList.contains('ShiftLeft');
  const shiftRight = button.classList.contains('ShiftRight');
  if (shiftLeft || shiftRight) {
    shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase, keyCode);
    button.classList.add('active');
  }

  if (button.classList.contains('CapsLock')) {
    button.classList.toggle('active');
    event.preventDefault();
    if (isShiftPressed) {
      shiftHandler(buttonContentRuLowerCase, buttonContentEnLowerCase);
      isShiftPressed = false;
    } else {
      shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase);
      isShiftPressed = true;
    }
  }
});

document.addEventListener('keyup', (event) => {
  const button = document.getElementsByClassName(event.code)[0];
  button.classList.remove('active');

  if (button.classList.contains('ShiftLeft') || button.classList.contains('ShiftRight')) {
    shiftHandler(buttonContentRuLowerCase, buttonContentEnLowerCase, keyCode);
  }
});

// localStorage on reloading page
window.addEventListener('DOMContentLoaded', () => {
  localStorageHandler();
});

// mouse ivents
keyboard.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('button')) {
    const lastClass = target.classList[2].toString();
    if (!exceptions.includes(lastClass)) {
      textArea.value += target.textContent;
    }
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
    toggleLangueage(language);
  }

  if (target.classList.contains('ShiftLeft') || target.classList.contains('ShiftRight')) {
    if (isShiftPressed) {
      shiftHandler(buttonContentRuLowerCase, buttonContentEnLowerCase);
      isShiftPressed = false;
    } else {
      shiftHandler(buttonContentRuUpperCase, buttonContentEnUpperCase);
      isShiftPressed = true;
    }
  }

  textArea.focus();
});
