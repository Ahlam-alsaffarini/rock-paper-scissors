let userChoose = document.querySelector("#user");
let computerChoose = document.querySelector("#computer");
let result = document.querySelector(".result");
let arr = ["حجر", "ورقة", "مقص"];

document.querySelectorAll(".hand").forEach(function (ele) {
  console.log(ele);
  ele.onclick = function () {
    let random = arr[Math.floor(Math.random() * arr.length)];
    computerChoose.innerText = `${random}`;

    if (this.classList.contains("scissors")) {
      let choose = "مقص";
      userChoose.innerText = `${choose}`;
      endResult(choose, random, result);
    } else if (this.classList.contains("paper")) {
      let choose = "ورقة";
      userChoose.innerText = `${choose}`;
      endResult(choose, random, result);
    } else {
      let choose = "حجر";
      userChoose.innerText = `${choose}`;
      endResult(choose, random, result);
    }
  };
});

function endResult(user, computer, result) {
  if (
    (user === "ورقة" && computer === "حجر") ||
    (user === "مقص" && computer === "ورقة") ||
    (user === "حجر" && computer === "مقص")
  ) {
    result.innerText = "لقد فزت ^-^ !";
    result.style.borderColor = "green";
  } else if (
    (user === "ورقة" && computer === "مقص") ||
    (user === "مقص" && computer === "حجر") ||
    (user === "حجر" && computer === "ورقة")
  ) {
    result.innerText = "لقد خسرت :( ";
    result.style.borderColor = "red";
  } else {
    result.innerText = "تعادل !";
    result.style.borderColor = "white";
  }
}
