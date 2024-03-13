function UI() {
  (this.btn_start = document.querySelector(".btn_start")),
    (this.next_btn = document.querySelector(".next_btn")),
    (this.correct_btn = document.querySelector(".correct_btn")),
    (this.btn_reply = document.querySelector(".btn_reply")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.quiz_box = document.querySelector(".quiz_box")),
    (this.score_box = document.querySelector(".score_box")),
    (this.option_list = document.querySelector(".option_list")),
    (this.correctIcon = ` <div class="icon"><i class="fas fa-check"></i></div>`),
    (this.IncorrectIcon = ` <div class="icon"><i class="fas fa-times"></i></div>`),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_second = document.querySelector(".time_second")),
    (this.time_line = document.querySelector(".time_line")),
    (this.input = document.querySelector(".input"));
}
UI.prototype.soruGoster = function (soru) {
  let question = `<span>${soru.soruMetni}</span>`;
  let options = "";

  for (let cevap in soru.cevapSecenekleri) {
    options += `
      <div class="option">
             <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
            </div>
      `;
  }

  document.querySelector(".question_text").innerHTML = question;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};
UI.prototype.soruSayiniGoster = function (soruSayi, toplamSoru) {
  let tag = ` <span class="badge bg-warning">${soruSayi} / ${toplamSoru}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};
UI.prototype.skoruGoster = function (toplamSoru, dogruCevap) {
  let tag = `Toplam ${toplamSoru} sualdan ${dogruCevap} doğru cevap verdiniz!`;
  document.querySelector(".score_text").innerHTML = tag;
};
