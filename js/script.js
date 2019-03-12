
const content = document.querySelectorAll('.content');

for (let i = 0; i < content.length; i++) {
  let modaal = content[i];
  modaal.parentNode.removeChild(modaal);
}

const contentButtons = document.querySelectorAll('.mButton');
const contentButtonsArray = [];

let contentBackground = document.createElement('div');
contentBackground.className = 'contentBackground';
let hiddenContent = document.createElement('div');
hiddenContent.className = 'hiddenContent';
let exitButton = document.createElement('button');
exitButton.className = 'exitButton';
exitButton.innerHTML = '&#x00D7;';

const newContent = (event) => {
  const counter = contentButtonsArray.indexOf(event.target);
  console.log(counter);
  hiddenContent.appendChild(exitButton);
  hiddenContent.appendChild(content[counter]);
  contentBackground.appendChild(hiddenContent);
  document.body.appendChild(contentBackground);
}

const closeContent = () => {
  hiddenContent.innerHTML = ''; 
  contentBackground.innerHTML = '';
  document.body.removeChild(contentBackground);
}

exitButton.addEventListener('click', closeContent);

for (let i = 0; i < contentButtons.length; i++) {
  contentButtonsArray.push(contentButtons[i]);

  contentButtons[i].addEventListener('click', newContent);
}
