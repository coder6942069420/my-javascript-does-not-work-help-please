var root = document.querySelector(':root');
let currentCursor;

const changeCursor = () =>{
  root.style.setProperty('--current-cursor', currentCursor);
};

const changeCursorDefault = () =>{
  currentCursor = 'default';
  changeCursor();
};

const changeCursorCrosshair = () =>{
  currentCursor = 'crosshair';
  changeCursor();
};

setTimeout(() =>{
  changeCursorCrosshair();
}, 2000);
