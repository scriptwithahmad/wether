const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addToDoList(this.value);
    this.value = "";
  }
});

const addToDoList = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${item}
        <i class="fas fa-times"></i>
    `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("crossFun");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  toDoBox.appendChild(listItem);
};
