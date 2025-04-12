let mainContainer = document.getElementById("main-cont");
let saveBtn = document.getElementById("saveBtn");
let listItem = document.getElementById('content-popup');
let listContainer = document.getElementById("listContainer");
let count = 0;

saveBtn.addEventListener('click', function() {
    mainContainer.style.backgroundColor = "#000000";
    let containers = document.appendChild("div");
    count += 1;
    let heading = containers.appendChild("h1");
    heading.textContent = 'Task' + count;
    let paragraph = containers.appendChild("p");
    paragraph.textContent = "";
})
localStorage.setItem("containers", JSON.strigify(containers));
let storedData = JSON.parse(localStorage('container'))
listContainer.appendChild = "storedData";
