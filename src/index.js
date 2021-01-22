// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("submit", (event) => {
//     let newTodo = document.getElementById("new-task-description").value;
//     const list = document.getElementById("tasks");
//     let item = document.createElement("li");
//     item.innerText = newTodo;
//     list.appendChild(item);
//     event.preventDefault();
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let input = document.getElementById('new-task-description');
    let inputValue = input.value;
    
    let liItem = document.createElement('li');
    
    let ulAll = document.querySelector('ul');
    if (inputValue != '') {
      liItem.innerText = inputValue;
      ulAll.append(liItem);
      input.value = '';
    };
    
  })
});