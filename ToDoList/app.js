let complete = document.querySelectorAll(".complete");
let remove = document.querySelectorAll(".remove");
let edit = document.querySelectorAll(".edit");
const addNew = document.querySelector(".add");
const l1 = document.querySelector(".listtask");
const l2 = document.querySelectorAll(".listtask");
const createNew = document.querySelector(".createnew");
const backToPlus = document.querySelector('input[value="Escape"]');
const taskAdder = document.querySelector('input[value="Add"]');
const allTasks = document.querySelector(".alltasks");
createNew.style.display = "none";
let data = 1;
if (localStorage.getItem("content").trim()) {
  allTasks.insertAdjacentHTML("afterbegin", localStorage.getItem("content"));
  data=localStorage.getItem("dataAtr")
  eventListenersForECR();
}

function taskDone(e) {
  const currentTask = this.closest(".listtask").getAttribute("data-task");
  const taskByData = document.querySelector(`[data-task='${currentTask}']`);
  const textContentH3 = taskByData.querySelector("h3");
  //   textContentH3.textContent = "sasd"
  if (!textContentH3.style.textDecoration) {
    textContentH3.style.textDecoration = "line-through";
  } else {
    textContentH3.style.textDecoration = "";
  }
  localStorage.setItem(`content`, allTasks.innerHTML);
}

function taskRemove(e) {
  const currentTask = this.closest(".listtask").getAttribute("data-task");
  const taskByData = document.querySelector(`[data-task='${currentTask}']`);
  taskByData.remove();
  localStorage.setItem(`content`, allTasks.innerHTML);
}

function revealCreateForm() {
  addNew.style.display = "none";
  createNew.style.display = "";
}

function hideCreateForm() {
  createNew.reset();
  addNew.style.display = "";
  createNew.style.display = "none";
}

function taskAdded(e) {
  e.preventDefault();
  let inputVal = document.querySelector('input[type="newTask"]');

  if (!inputVal.value.trim()) {
    inputVal.value = "";
    return;
  }
  toDo = inputVal.value.trim();
  const htmlToAddTask = `<div class="listtask" data-task="${data}">
        <div class="note"><h3>${toDo}</h3></div>
        <div class="icons">
          <button class="btn complete">
            <img src="./styles/tick.png" title="complete" width="20px" />
          </button>
          <button class="btn edit">
            <img src="./styles/edit.png" title="edit" width="20px" />
          </button>
          <button class="btn remove">
            <img src="./styles/delete.png" title="remove" width="20px" />
          </button>
        </div>
      </div>`;
  hideCreateForm();
  data++;
  allTasks.insertAdjacentHTML("afterbegin", htmlToAddTask);
  localStorage.setItem(`content`, allTasks.innerHTML);
  localStorage.setItem(`dataAtr`, data);
  eventListenersForECR();
}

function eventListenersForECR() {
  complete = document.querySelectorAll(".complete");
  remove = document.querySelectorAll(".remove");
  edit = document.querySelectorAll(".edit");

  for (let i = 0; i < complete.length; i++) {
    complete[i].addEventListener("click", taskDone);
  }

  for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click", taskRemove);
  }
  for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener("click", editTask);
  }
}

function editTask(e) {
  e.preventDefault();
  const currentTask = this.closest(".listtask").getAttribute("data-task");
  const taskByData = document.querySelector(`[data-task='${currentTask}']`);
  const notePart = taskByData.querySelector(".note");
  const textContentH3 = taskByData.querySelector("h3"); ///// added
  const iconsPart = taskByData.querySelector(".icons");
  const form = `<form class="edittask">
  <input type="newTask" placeholder="Changes are a part of life..." value="${textContentH3.textContent}" />
  <input type="submit" value="Save" />
  <input type="button" value="Discard" />
</form>`;
  notePart.style.display = "none";
  iconsPart.style.display = "none";
  taskByData.insertAdjacentHTML("afterbegin", form);
  const formCloser = taskByData.querySelector(".edittask");
  const saveBtn = taskByData.querySelector('input[value="Save"]');
  const discardBtn = taskByData.querySelector('input[value="Discard"]');
  function hideForm() {
    notePart.style.display = "";
    iconsPart.style.display = "";
    formCloser.reset();
    formCloser.style.display = "none";
  }
  discardBtn.addEventListener("click", hideForm);
  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let inputVal = formCloser.querySelector('input[type="newTask"]');

    if (!inputVal.value.trim()) {
      inputVal.value = "";
      return;
    }
    let edited = inputVal.value.trim();
    // const textContentH3 = taskByData.querySelector("h3");
    hideForm();
    textContentH3.textContent = edited;
    localStorage.setItem(`content`, allTasks.innerHTML);

    // textContentH3.style.textDecoration = "";
  });

  // textContentH3.textContent = "sasd"
}

taskAdder.addEventListener("click", taskAdded);
addNew.addEventListener("click", revealCreateForm);
backToPlus.addEventListener("click", hideCreateForm);
