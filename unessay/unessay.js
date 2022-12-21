question = 0
answers = []
correct = [true, false, true, false, true, true, false, false, true, false]


function start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("questions").style.display = "flex";
}

function real() {
  answers.push(true);
  next();
}


function fake() {
  answers.push(false);
  next();
}

function next(){
  if (question == 9) {
    results();
    return;
  }
  document.getElementById("q"+question).style.display = "none";
  question++;
  document.getElementById("q"+question).style.display = "flex";
}

function results(){
  correctNum = 0
  for(var i = 0; i < 10; i++) {
    if (answers[i] == correct[i]) {
      correctNum++;
    }
  }
  document.getElementById("correctNum").innerText = correctNum;
  document.getElementById("questions").style.display = "none";
  document.getElementById("results").style.display = "flex";
}
