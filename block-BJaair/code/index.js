let root = document.querySelector(".cards");
let form = document.querySelector("form");
let arr = JSON.parse(localStorage.getItem("items")) || [];

function handleClick(e) {
  let area = document.createElement("input");
  area.value = this.innerText;
  this.replaceWith(area);
  area.focus();

  function handleBlur() {
    this.innerText = area.value;
    let elemId = parseInt(this.dataset.id);
    let newArr = arr.map((task) => {
      if (task.id === elemId) {
        if (this.nodeName === "H3") {
          task.title = area.value;
        } else {
          task.category = area.value;
        }
      }
      return task;
    });
    localStorage.setItem("items", JSON.stringify(newArr));
    area.replaceWith(this);
  }
  function handleKeyDown(e) {
    if (e.keyCode !== 13) return;
    area.blur();
  }

  area.addEventListener("blur", handleBlur.bind(this));
  area.addEventListener("keydown", handleKeyDown.bind(this));
}

function createUI() {
  root.innerHTML = "";
  arr.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("card");
    let h3 = document.createElement("h3");
    h3.addEventListener("click", handleClick);
    h3.setAttribute("data-id", task.id);
    h3.innerText = task.title;
    let p = document.createElement("p");
    p.addEventListener("click", handleClick);
    p.setAttribute("data-id", task.id);
    p.innerText = task.category;
    li.append(p, h3);
    root.append(li);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  let obj = {
    title: form.title.value,
    category: form.category.value,
    id: new Date().getTime(),
  };
  arr.push(obj);
  localStorage.setItem("items", JSON.stringify(arr));
  createUI();
  form.reset();
}

form.addEventListener("submit", handleSubmit);
createUI();
