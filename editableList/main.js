const arrForFunck = ['milk','bread', 'cheeze', 'beer','cola'];
const inputIn = document.querySelector('#input');
const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');
const orderList = document.querySelector('#orderList');

function createOlList(arr) {
  const array = arr;
  const arrayOfList = [];
  const olList = document.querySelector('#orderList');
  
  array.forEach( element => {
    arrayOfList.push('<li>' + element + '</li>');
  })

  olList.innerHTML =  arrayOfList.join('');
 

  if(!arrForFunck.length){
    removeButton.setAttribute("disabled", "disabled");
    removeButton.style.backgroundColor="red";
  }else{
    removeButton.removeAttribute("disabled", "disabled");
    removeButton.style.backgroundColor="inherit";
  }
}

createOlList(arrForFunck)


function addElement() {

  if(inputIn.value){
    arrForFunck.push(inputIn.value);
    inputIn.value = "";
    createOlList(arrForFunck);
  } else{
    alert('Введите текст')
  }

};


function removeElement() {
  arrForFunck.pop();
  createOlList(arrForFunck);
};
    
function changeLi(e){
 e.target.innerHTML = `<input type="text" value="${e.target.innerHTML}">`
}
orderList.addEventListener('click', changeLi)
addButton.addEventListener('click', addElement);
removeButton.addEventListener('click', removeElement);





