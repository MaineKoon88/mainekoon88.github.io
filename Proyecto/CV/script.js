const addBtn = document.querySelector(".add");

const input = document.querySelector(".inp-group");


function removeInput(){
  this.parentElement.remove();
}

function addInput() {
  const name = document.createElement("input");
  name.type="text";
  name.placeholder = "Agregar Título";

  const est = document.createElement("input");
  est.type="Establecimiento";
  est.placeholder = "Agregar establecimiento";

  const btn = document.createElement("a");
  btn.className = "delete";
  btn.innerHTML = "&times";

  btn.addEventListener("click", removeInput);

  const flex = document.createElement("div");
  flex.className = "flex";

  input.appendChild(flex);
  flex.appendChild(name);
  flex.appendChild(est);
  flex.appendChild(btn);
}



addBtn.addEventListener("click", addInput);
