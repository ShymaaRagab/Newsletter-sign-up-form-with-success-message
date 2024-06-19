function handleSubmit(e) {
  e.preventDefault();
  const data = {};
  const field = e.target.querySelector("input");
  data[field.name] = field.value;
  if (
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      data[field.name]
    )
  ) {
    document
      .getElementsByClassName("popupMessage")[0]
      .classList.add("activeMessage");
    document.getElementById("name-error").innerHTML = "";
    field.style.border = "2px solid hsl(231, 7%, 60%)";
    field.style.backgroundColor = "#fff";
  } else {
    document.getElementById("name-error").innerHTML = "valid email required";
    field.style.border = "2px solid hsl(4, 100%, 67%)";
    field.style.backgroundColor = "hsl(4, 100%, 67% , 0.3)";
  }
}
function DismissMessage() {
  document
    .getElementsByClassName("popupMessage")[0]
    .classList.remove("activeMessage");
}

document.getElementById("form").addEventListener("submit", handleSubmit);
document.getElementById("dismiss").addEventListener("click", DismissMessage);
