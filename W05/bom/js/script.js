const list = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  let myItem = input.value;
  if (myItem != "") {
    const listItem = document.createElement("li");
    const listBtn = document.createElement("button");
    const listText = document.createElement("span");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listBtn.textContent = "❌";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });
  }

  input.value = "";
  input.focus();
});
