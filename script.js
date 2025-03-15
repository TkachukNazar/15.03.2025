let reg_4 = /^[A-Za-zа-яА-Я]\w*\.(jpg|png|gif)$/;
let info = document.getElementById("info");
function check() {
  let str = document.getElementById("inp").value.trim();
  console.log(str);
  if (reg_4.test(str)) {
    info.innerHTML = "Ім'я файлу правильне";
  } else {
    info.innerHTML = "Ім'я файлу неправильне";
  }
}
document.getElementById("check").addEventListener("click", check);
document.getElementById("inp").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("check").click();
  }
});
