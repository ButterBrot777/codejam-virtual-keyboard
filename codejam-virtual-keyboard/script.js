const wrapper = document.createElement('div');
      keyboard = document.createElement('div');
      row = document.createElement('div');
      botton = document.createElement('button');
      textArea = document.createElement('textarea');

wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);

textArea.classList.add('text-area');
wrapper.appendChild(textArea);

keyboard.classList.add('keyboard');
wrapper.appendChild(keyboard);

// alert('Hello World');

const buttonContentEnDownCase = 

[ 
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
  ['tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],
  ['caps lock','a','s','d','f','g','h','j','k','l',';','\'','enter'],
  ['shift','z','x','c','v','b','n','m',',','.','/','shift right'],
  ['lang', 'control','option','command','space','command','option','←','↓','→'],
  ['↑'],

];

const buttonContentEnUpperCase = 

[ 
  ['~','!','@','#','$','%','^','&','*','(',')','_','+','delete'],
  ['tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|'],
  ['caps lock','A','S','D','F','G','H','J','K','L',':','\"','enter'],
  ['shift','Z','X','C','V','B','N','M','<','>','?','shift right'],
  ['lang', 'control','option','command','space','command','option','←','↓','→'],
  ['↑'],
];

const buttonContentRuDownCase = 

[ 
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
  ['tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\'],
  ['caps lock','ф','ы','в','а','п','р','о','л','д','ж','э','enter'],
  ['shift','я','ч','с','м','и','т','ь','б','ю','.','↑','shift right'],
  ['lang', 'control','option','command','space','command','option','←','↓','→']
];

const buttonContentRuUpperCase = 

[ 
  ['`','1','2','3','4','5','6','7','8','9','0','-','=','delete'],
  ['tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\'],
  ['caps lock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','enter'],
  ['shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','↑','shift right'],
  ['lang', 'control','option','command','space','command','option','←','↓','→']
];

const keyCode =

[
  ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
  ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'],
  ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
  ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash', 'ShiftRight'],
  ['lang', 'ControlLeft','AltLeft','MetaLeft','Space','MetaRight','AltRight','ArrowLeft','ArrowDown','ArrowRight'],
  ['ArrowUp']
];

function drowKeyBoard(buttonContentEnDownCase, keyCode){
  keyboard.innerHTML = ""
  
  buttonContentEnDownCase.forEach(function(elems, indexRow){
  
    let row = document.createElement('div');
    row.classList.add('row', `row${indexRow}`)
    
    elems.forEach(function(elem, indexElem){
      let btn = document.createElement('button');
      let code = keyCode[indexRow][indexElem];
      btn.classList.add('button', `button${indexElem}`, code)
      btn.textContent = elem;
    
      row.appendChild(btn)
  
    })
  
    keyboard.appendChild(row)
  })

}

drowKeyBoard(buttonContentEnDownCase, keyCode)

//mouse ivents
keyboard.addEventListener('click', function(event){
  // console.log(event)
  // console.log(event.target)

  let target = event.target
  if(target.classList.contains('button')) {
    if(!target.classList.contains('Tab'))
    if(!target.classList.contains('Enter'))
    if(!target.classList.contains('Space'))
    if(!target.classList.contains('MetaLeft'))
    if(!target.classList.contains('MetaRight'))
    if(!target.classList.contains('MetaRight'))
    if(!target.classList.contains('Backspace'))



    textArea.value += target.textContent;

    target.classList.add('button:active')
  }

  if(target.classList.contains('Backspace')) {
    textArea.value.splice(0, -1);
  }

  if(target.classList.contains('Tab')) {
    textArea.value += '\t';
  }

  if(target.classList.contains('Space')) {
    textArea.value += ' ';
  }

  if(target.classList.contains('Enter')) {
    textArea.value += '\n';
  }

  textArea.focus();

})

document.addEventListener('keydown', function(event){
  // console.log(event)
  // console.log(event.code)
  let button = document.getElementsByClassName(event.code)[0]
  button.classList.add('black')

  if (button.classList.contains('ShiftLeft')) {
    drowKeyBoard(buttonContentEnUpperCase, keyCode)
  }
})

document.addEventListener('keyup', function(event){
  // console.log(event)
  // console.log(event.code)
  let button = document.getElementsByClassName(event.code)[0]
  button.classList.remove('black')
  if (button.classList.contains('ShiftLeft')) {
    drowKeyBoard(buttonContentEnDownCase, keyCode)
  }
})

//localStorage??