let score = 0
let counter = 0

// Connect "Next" button to function
document.getElementById('next').addEventListener('click', next)

// Connect "Previous" button to function
document.getElementById('previous').addEventListener('click', previous)

// Connect "Submit" button to function
document.getElementById('submit').addEventListener('click', submit)

function next () {
  // Hide first page and next button and show next page, previous button and submit button
  document.getElementById('firstpage').style.display = 'none'
  document.getElementById('next').style.display = 'none'
  document.getElementById('secondpage').style.display = 'block'
  document.getElementById('previous').style.display = 'block'
  document.getElementById('submit').style.display = 'block'
}

function previous () {
  // Hide second page, previous button and submit button, show first page and next button
  document.getElementById('firstpage').style.display = 'block'
  document.getElementById('next').style.display = 'block'
  document.getElementById('secondpage').style.display = 'none'
  document.getElementById('previous').style.display = 'none'
  document.getElementById('submit').style.display = 'none'
}

function submit () {
  //Check user's answers
  if (document.getElementById('correct1').checked) {
    score++;
  }
  if (document.getElementById('correct2').checked) {
    score++;
  }
  if (document.getElementById('correct3').checked) {
    score++;
  }
  if (document.getElementById('correct4').checked) {
    score++;
  }
  if (document.getElementById('correct5').checked) {
    score++;
  }
  if (document.getElementById('correct6').checked) {
    score++;
  }
  if (document.getElementById('correct7').checked) {
    score++;
  }
  if (document.getElementById('correct8').checked) {
    score++;
  }

  //Show score
  alert('Your score is '+score)
}
