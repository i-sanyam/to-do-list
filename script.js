let inp = document.getElementById("newTask");
let list = document.getElementById("taskList");
let addButton = document.getElementById("btnAdd");
let clearButton = document.getElementById("btnClear");
let deleteButton = document.getElementById("btnDelete");
let sortButton = document.getElementById("btnSort");
let inpj = $("input");
function addItem() {
	let task = inp.value;
	if (inp.value == "") return;
	let newitem = document.createElement("li");
	newitem.innerText = task;

	newitem.setAttribute("class", "list-group-item col m6 p4");
	newitem.onclick = function () {
		// console.log(newitem);
		newitem.classList.toggle("done");
		togglebtn(inpj.val() == "");
	};

	list.appendChild(newitem);

	inp.value = "";
	togglebtn(true);
}

addButton.onclick = addItem;
inp.onkeypress = function (e) {
	if (e.key == "Enter") {
		addItem();
	}
};

clearButton.onclick = function () {
	inp.value = "";
	togglebtn(true);
};

deleteButton.onclick = function () {
	// alert("yet implement")
	let tobedone = document.getElementsByClassName("done");
	let len = tobedone.length;
	for (let i = 0; i < len; i++) {
		// tobedone[0].style.backgroundColor = 'red'
		tobedone[0].remove();
	}
	togglebtn(inpj.val() == "");
};

sortButton.onclick = function () {
	// alert("yet implement")
	let tobedone = document.getElementsByClassName("done");
	let len = tobedone.length;
	for (let i = 0; i < len; i++) {
		// tobedone[0].style.backgroundColor = 'red'
		list.insertBefore(tobedone[0], null);
	}
	togglebtn(inpj.val() == "");
	sortButton["disabled"] = true;
};

// let clearButtonj = $("#btnClear");
inpj.on("input", () => {
	togglebtn(inpj.val() == "");
	// clearButtonj.prop("disabled", false);
	// addButtonj.prop("disabled", false);
});
function togglebtn(disable) {
	if (disable) {
		clearButton["disabled"] = addButton["disabled"] = true;
	} else {
		clearButton["disabled"] = addButton["disabled"] = false;
	}
	if (list.childNodes.length < 1) {
		sortButton["disabled"] = true;
		deleteButton["disabled"] = true;
	} else {
		let count = document.getElementsByClassName("done").length;
		// console.log(count);
		if (count == 0) {
			sortButton["disabled"] = true;
			deleteButton["disabled"] = true;
		} else {
			sortButton["disabled"] = false;
			deleteButton["disabled"] = false;
		}
	}
}

window.onload = function () {
	// console.log("refresh");
	inp.value = "";
};
