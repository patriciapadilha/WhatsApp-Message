const input = document.getElementById('input-text');
const button = document.getElementById('btn-create-new');
const list = document.getElementById('msg-list');
const removeIcon = document.getElementById('delete');

let selectElement = '';

function newMsg() {
  button.addEventListener('click', (event) => {
    const text = input.value;
    if (text) {
      console.log(text);
      const newDiv = document.createElement('div');
      const newText = document.createElement('p');
      const icon = document.createElement('img');
      newDiv.draggable = "true";
      newDiv.id = new Date().getTime();
      newDiv.ondragstart = () => drag(event, newDiv.id);
      newText.innerText = text;
      icon.src = 'https://cdn-icons-png.flaticon.com/512/4494/4494494.png';
      list.appendChild(newDiv);
      newDiv.appendChild(newText);
      newDiv.appendChild(icon);
      input.value = '';
    }
  });
}

function sendMsg() {
  list.addEventListener('click', (event) => {
    const text = event.target.innerText;
    console.log(text);
    const number = prompt("Qual é o número? Apenas número com DDD");
    console.log(number);
    const link = `https://api.whatsapp.com/send?phone=55${number}&text=${text}`;
    window.open(link);
  })
}

function remove(event) {
  removeIcon.ondrop = drop(event);
  removeIcon.ondragover = over(event);
  console.log(removeIcon);
}

function drag(event, id) {
  if(id) {
    selectElement = id;
  }
  if (!id) {
    selectElement = event.target.id;
  }
}

function over(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const element = document.getElementById(`${selectElement}`);
  element.parentNode.removeChild(element);
}


newMsg();
sendMsg();