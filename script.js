let reg = /^[A-Za-zа-яА-Я]\w*\.(jpg|png|gif)$/;
let info = document.getElementById("info");
function check() {
  let str = document.getElementById("inp").value.trim();
  console.log(str);
  if (reg.test(str)) {
    info.innerHTML = "Ім'я файлу правильне";
    info.classList.add("correct");
    info.classList.remove("wrong");
  } else {
    info.innerHTML = "Ім'я файлу неправильне";
    info.classList.add("wrong");
    info.classList.remove("correct");
  }
}
document.getElementById("check").addEventListener("click", check);
document.getElementById("inp").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("check").click();
  }
});
