const arrForFunck = [];
const inputIn = document.querySelector(".input");
const addButton = document.querySelector(".addBtn");
const removeButton = document.querySelector(".removeBtn");
const orderList = document.querySelector(".orderList");
const container = document.querySelector(".container");

(function containerStyle() {
  container.style.border = " 2px dashed lightblue";
  container.style.padding = "10px";
  container.style.width = "400px";
})();

removeButton.setAttribute("disabled", true);

const displayList = (input, list) => {
  input.value = "";
  list.innerHTML = "";
  arrForFunck.forEach((el, i) => {
    list.innerHTML += `<li class="orderList" data-id="${i}">${
      i + 1
    }.<input type="text" value="${el}"></li>`;
  });
};

function heandlerButtons(e) {
  const target = e.target;

  if (target.classList.contains("removeBtn")) {
    if (arrForFunck.length) {
      arrForFunck.pop();
      displayList(inputIn, orderList);

      if (!arrForFunck.length) removeButton.setAttribute("disabled", true);
    };
  };

  if (target.classList.contains("addBtn")) {
    if (inputIn.value) {
      arrForFunck.push(inputIn.value);
      displayList(inputIn, orderList);

      if (arrForFunck.length) {
        removeButton.removeAttribute("disabled");
      };
    };
  };
};

function changeElem(e) {
  const target = e.target;

  if (target.closest(".orderList")?.dataset?.id) {
    const id = target.closest(".orderList").dataset.id;
    const value = target.closest(".orderList input").value;

    arrForFunck.splice(id, 1, value);
  }
}

container.addEventListener("click", heandlerButtons);
container.addEventListener("change", changeElem);
