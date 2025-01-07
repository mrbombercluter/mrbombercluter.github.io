const button = document.getElementById('tyrone-button');
button.addEventListener('click', () => {
  window.open('https://tyroneware.cc', '_blank');
});

const backgroundInput = document.createElement('input');
backgroundInput.type = 'text';
backgroundInput.placeholder = 'Enter image URL here';
backgroundInput.style.position = 'fixed';
backgroundInput.style.bottom = '5px';
backgroundInput.style.left = '20px';
backgroundInput.style.zIndex = '9999';
backgroundInput.style.padding = '5px';
backgroundInput.style.borderRadius = '5px';
backgroundInput.style.border = '1px solid #ccc';
backgroundInput.style.fontSize = '1em';

document.body.appendChild(backgroundInput);

backgroundInput.addEventListener('change', () => {
  const container = document.getElementById('tyrone-container');
  container.style.backgroundImage = `url(${backgroundInput.value})`;
});
