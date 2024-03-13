const quiz = new Quiz(randomQuestions);
const ui = new UI();
const dogrucvb = new Soru();

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "";
// });

// ui.btn_start.addEventListener("click", function () {
//   var password = prompt("Zəhmət olmasa şifrəni daxil edin:");
//   var correctPassword = "Umid2000";

//   if (password === correctPassword) {
//     ui.quiz_box.classList.add("active");
//     ui.soruGoster(quiz.soruGetir());
//     startTimerLine();
//     startTimer(60);
//     ui.soruSayiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
//     ui.correct_btn.classList.remove("show");
//     ui.next_btn.classList.remove("show");
//   } else {
//     alert("Şifrə yanlışdır!");
//   }
// });

ui.btn_start.addEventListener("click", function () {
  // var passwordInput = document.getElementById("pswrd");
  // var password = passwordInput.value;
  // var correctPassword = "1";

  // if (password === correctPassword) {
  ui.quiz_box.classList.add("active");
  ui.soruGoster(quiz.soruGetir());
  ui.time_text.textContent = "Qalan müddət";
  startTimerLine();
  startTimer(60);
  ui.soruSayiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.correct_btn.classList.remove("show");
  ui.next_btn.classList.remove("show");
  ui.input.classList.add("dntshow");
  // } else {
  //   alert("Şifrə yanlışdır!");
  // }
  passwordInput.value = "";
});

ui.next_btn.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    ui.time_text.textContent = "Qalan müddət";
    clearInterval(counterLine);
    clearInterval(counter);

    startTimer(60);
    startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.next_btn.classList.remove("show");
    ui.correct_btn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.score_box.classList.add("active");
    ui.quiz_box.classList.remove("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevabSayi);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevabSayi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.IncorrectIcon);
    ui.correct_btn.classList.add("show");
  }
  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }
  ui.next_btn.classList.add("show");
}

let counter;

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);

      ui.time_text.textContent = "Vaxt Bitdi";

      let cevap = quiz.soruGetir().dogruCevap;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        option.classList.add("disabled");
      }
      ui.next_btn.classList.add("show");
      // ui.correct_btn.classList.add("show");
    }
  }
}
let counterLine;
function startTimerLine(time) {
  line_width = 0;
  counterLine = setInterval(timer, 112);

  function timer() {
    line_width += 1;
    ui.time_line.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine);
    }
  }
}
// @MEDIA query

// var mediaQuery = window.matchMedia("(min-width: 820px)");

// // Define a function that changes the font size

// function startTimerLine(time) {
//   line_width = 0;
//   counterLine = setInterval(timer, 240);

//   function timer() {
//     line_width += 100;
//     ui.time_line.style.width = line_width + "px";

//     if (line_width > 549) {
//       clearInterval(counterLine);
//     }
//   }
// }

// var mediaQuery = window.matchMedia("(max-width: 480px)");

// // Define a function that changes the font size

// function startTimerLine(time) {
//   line_width = 0;
//   counterLine = setInterval(timer, 33);

//   function timer() {
//     line_width += 0.2;
//     ui.time_line.style.width = line_width + "px";

//     if (line_width > 370) {
//       clearInterval(counterLine);
//     }
//   }
// }

ui.correct_btn.addEventListener("mousedown", function () {
  let soru = quiz.soruGetir();
  let dogruCevap = soru.dogruCevap;

  let allOptions = document.querySelectorAll(".option");

  allOptions.forEach(function (option) {
    let cevap = option.querySelector("span b").textContent;
    if (cevap === dogruCevap) {
      option.classList.add("correct");
      option.insertAdjacentHTML("beforeend", ui.correctIcon);
    }
  });

  ui.correct_btn.classList.remove("show");
});

ui.btn_reply.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevabSayi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
  ui.input.classList.remove("dntshow");
});
