function showMessage() {
    alert("Darslarni boshladik!");
}

const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;

    const li = document.createElement("li");
    li.textContent = name + " (" + username + ")";

    list.appendChild(li);
});