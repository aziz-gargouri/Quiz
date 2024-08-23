class Questions {
  constructor(description, answer, point, coverImg, character) {
    this.description = description;
    this.answer = answer;
    this.point = point;
    this.coverImg = coverImg;
    this.character = character;
  }
}

let naruto = new Questions(
  "A ninja with a dream of becoming the strongest ninja and leader of his village.",
  "Naruto",
  5,
  "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
  "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png"
);
let deathNote = new Questions(
  "A high school student who gains the powers of a death god and uses them to bring justice.",
  "Death Note",
  10,
  "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "/assets/img/death.png"
);
let onePiece = new Questions(
  "A group of friends embark on an adventure to find a mysterious treasure.",
  "One Piece",
  2,
  "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
  "/assets/img/onePiece.png"
);

let quizQuestions = [naruto, deathNote, onePiece];
let points = document.getElementById("score");
let answer = document.getElementById("answer");
let question = document.getElementById("question");
let cover = document.getElementById("cover");
let charachter = document.getElementById("character");
let audioYes = document.getElementById("yes");
let audioGun = document.getElementById("gun");
let audioYSD = document.getElementById("youShD");

let index = 0;

function display() {
  question.innerHTML = quizQuestions[index].description;
  cover.src = quizQuestions[index].coverImg;
  charachter.src = quizQuestions[index].character;
}
function chkeckAnswer() {
  if (answer.value.toLowerCase() === quizQuestions[index].answer.toLowerCase()) {

    if (index === 2) {
      alert("game over");
      index=0;
      points.innerHTML = 0
      display();}
      else if (index !== 2) {
        index++;
        answer.value = "";
        points.innerHTML = +points.innerHTML+ (+quizQuestions[index].point);
        audioYes.play();
        display();
      }
   
  }
   
   else {
    audioGun.play();
    setTimeout(() => audioYSD.play(), 1000);

  }
}

display()