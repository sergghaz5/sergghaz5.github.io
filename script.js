const winButton = document.getElementById('winButton');
let score = 0;

winButton.addEventListener('click', () => {
  if (score === 10) { // Check if the score is 10 when the button is clicked
    alert('Դուք Ունեք Լավ Գիտելիքներ:');
  } else {
    alert('Վատ Չէ:');
  }
});

const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '2') {
      numberButtons.forEach(btn => {
        btn.classList.remove('red-border');
      });
      button.classList.add('green-border');
      handleAnswer(true, button);
    } else {
      button.classList.toggle('red-border');
      handleAnswer(false, button);
    }
  });
});

function updateScore() {
  if (score <= 10) {
    alert("Ձեր Միավորը: " + score);
  }
}

function handleAnswer(isCorrect, button) {
  if (isCorrect) {
    score += 1;
    setTimeout(() => {
      updateScore();
      button.classList.add('green-border');
    }, 100);
  } else {
    score -= 1;
    setTimeout(() => {
      updateScore();
    }, 100);
  }
}

//////////////////////////////////////////////////////////////////////
//**************************************************************** */

function showGameContainer() {
  document.getElementById("game-container").style.display = "block";
  document.getElementById("game-container1").style.display = "block";
  document.getElementById("game-container2").style.display = "block";
  document.getElementById("game-container3").style.display = "block";
  document.getElementById("game-container4").style.display = "block";
  document.getElementById("game-container5").style.display = "block";
  document.getElementById("game-container6").style.display = "block";
  document.getElementById("game-container7").style.display = "block";
  document.getElementById("game-container8").style.display = "block";
  document.getElementById("game-container9").style.display = "block";
  document.getElementById("winButtonContainer").style.display = "block";
  document.getElementById("signupContainer").style.display = "none";
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "block"
}



function showAbout () {
  document.getElementById("about").style.display = "block";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("game-container1").style.display = "none";
  document.getElementById("game-container2").style.display = "none";
  document.getElementById("game-container3").style.display = "none";
  document.getElementById("game-container4").style.display = "none";
  document.getElementById("game-container5").style.display = "none";
  document.getElementById("game-container6").style.display = "none";
  document.getElementById("game-container7").style.display = "none";
  document.getElementById("game-container8").style.display = "none";
  document.getElementById("game-container9").style.display = "none";
  document.getElementById("winButtonContainer").style.display = "none";
  document.getElementById("signupContainer").style.display = "none";
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("home").style.display = "block"
}


function showHome() {
  document.getElementById("home").style.display = "block"
  document.getElementById("about").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("game-container1").style.display = "none";
  document.getElementById("game-container2").style.display = "none";
  document.getElementById("game-container3").style.display = "none";
  document.getElementById("game-container4").style.display = "none";
  document.getElementById("game-container5").style.display = "none";
  document.getElementById("game-container6").style.display = "none";
  document.getElementById("game-container7").style.display = "none";
  document.getElementById("game-container8").style.display = "none";
  document.getElementById("game-container9").style.display = "none";
  document.getElementById("winButtonContainer").style.display = "none";
  document.getElementById("signupContainer").style.display = "none";
  document.getElementById("loginContainer").style.display = "none";
}

/////////////////////////////////////////////////////////////////////////

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Show/hide the button based on scroll position
window.onscroll = function () {
  var scrollBtn = document.getElementById('goToTopBtn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};


document.getElementById('homeBtn').addEventListener('click', function() {
  location.reload();
});


// Add your existing JavaScript code here

function showLoginForm() {
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("signupContainer").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("game-container1").style.display = "none";
  document.getElementById("game-container2").style.display = "none";
  document.getElementById("game-container3").style.display = "none";
  document.getElementById("game-container4").style.display = "none";
  document.getElementById("game-container5").style.display = "none";
  document.getElementById("game-container6").style.display = "none";
  document.getElementById("game-container7").style.display = "none";
  document.getElementById("game-container8").style.display = "none";
  document.getElementById("game-container9").style.display = "none";
  document.getElementById("winButtonContainer").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "none"
}

function showSignupForm() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("signupContainer").style.display = "none";
  document.getElementById("game-container").style.display = "none";
  document.getElementById("game-container1").style.display = "none";
  document.getElementById("game-container2").style.display = "none";
  document.getElementById("game-container3").style.display = "none";
  document.getElementById("game-container4").style.display = "none";
  document.getElementById("game-container5").style.display = "none";
  document.getElementById("game-container6").style.display = "none";
  document.getElementById("game-container7").style.display = "none";
  document.getElementById("game-container8").style.display = "none";
  document.getElementById("game-container9").style.display = "none";
  document.getElementById("winButtonContainer").style.display = "none";
  document.getElementById("signupContainer").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("home").style.display = "none"
}

function login() {
  // Add your login logic here
  console.log("Login button clicked");
}

function signup() {
  // Add your signup logic here
  console.log("Signup button clicked");
}



///////////////////////////////////////////////////////////////////

document.getElementById('getDataButton').addEventListener('click', () => {
  // Make a request to your localhost server's API endpoint
  fetch('/api/data')
      .then(response => response.json())
      .then(data => {
          // Display the response in the 'result' div
          document.getElementById('result').innerText = data.message;
      })
      .catch(error => {
          console.error('Error:', error);
      });
});