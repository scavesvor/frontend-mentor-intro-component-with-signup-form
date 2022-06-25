// const inputs = document.getElementsByTagName("input");
// const email = document.getElementById("email");

// function validateInputs() {
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("blur", function () {
//       const errorText = document.getElementsByClassName("intro__right__form__alert");
//       const errorImg = document.getElementsByClassName("intro__right__form__alert--img");

//       if (!this.value) {
//         errorText[i].classList.add("active");
//         errorImg[i].classList.add("active");
//       } else {
//         errorText[i].classList.remove("active");
//         errorImg[i].classList.remove("active");
//       }
//     });
//   }
// }
// validateInputs();
const nameEl = document.getElementById("name");
const surnameEl = document.getElementById("surname");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const formEl = document.getElementById("form");
const errorText = document.querySelectorAll(".intro__right__form__alert");
const errorImg = document.querySelectorAll(".intro__right__form__alert--img");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < errorText.length; i++) {
    for (let y = 0; y < errorImg.length; y++) {
      if (nameEl.value === "" || nameEl.value == null) {
        errorText[0].classList.add("active");
        errorImg[0].classList.add("active");
        nameEl.style.border = "1px solid red";

        setInterval(function () {
          errorText[0].classList.remove("active");
          errorImg[0].classList.remove("active");
          nameEl.style.border = "1px solid black";
        }, 3000);
      }

      if (surnameEl.value === "" || surnameEl.value == null) {
        errorText[1].classList.add("active");
        errorImg[1].classList.add("active");
        surnameEl.style.border = "1px solid red";

        setInterval(function () {
          errorText[1].classList.remove("active");
          errorImg[1].classList.remove("active");
          surnameEl.style.border = "1px solid black";
        }, 3000);
      }

      if (emailEl.value === "" || emailEl.value == null) {
        errorText[2].classList.add("active");
        errorImg[2].classList.add("active");
        emailEl.style.border = "1px solid red";

        setInterval(function () {
          errorText[2].classList.remove("active");
          errorImg[2].classList.remove("active");
          emailEl.style.border = "1px solid black";
        }, 3000);
      }

      if (passwordEl.value === "" || passwordEl.value == null) {
        errorText[3].classList.add("active");
        errorImg[3].classList.add("active");
        passwordEl.style.border = "1px solid red";

        setInterval(function () {
          errorText[3].classList.remove("active");
          errorImg[3].classList.remove("active");
          passwordEl.style.border = "1px solid black";
        }, 3000);
      }

      if (nameEl.value && surnameEl.value && emailEl.value && passwordEl.value) {
        console.log("form inviato");
        e.stopPropagation();
        nameEl.value = "";
        surnameEl.value = "";
        emailEl.value = "";
        passwordEl.value = "";
        remove();
      }
    }
  }
});
