let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :))";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});


document.addEventListener("DOMContentLoaded", function() {
  const openBtn = document.getElementById("openBtn");
  const miniWindow = document.getElementById("miniWindow");
  const closeBtn = document.getElementById("closeBtn");

  miniWindow.style.display = "none";

  openBtn.addEventListener("click", function() {
      miniWindow.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
      miniWindow.style.display = "none";
  });
});

window.onload = function() {
  const addButton = document.getElementById("addCartBtn");
  const sizeDropdown = document.getElementById("size-select");
  const quantitySpan = document.getElementById("quantity");
  const selectedSizeSpan = document.getElementById("selected-size");
  const QuantitySpan = document.getElementById("Quantity");
  const cartCounter = document.getElementById("cart-counter");

  let clickCount = 0;

  addButton.addEventListener("click", () => {
      clickCount++;
      cartCounter.textContent = quantitySpan.textContent = QuantitySpan.textContent = clickCount;

      if (clickCount === 1) {
          cartCounter.style.display = "block";
      }

      // Update the "Quantity" in the miniWindow
      const miniWindowQuantity = document.getElementById("Quantity");
      if (miniWindowQuantity) {
          miniWindowQuantity.textContent = clickCount;
      }
  });

  sizeDropdown.addEventListener("change", () => {
      const selectedSize = sizeDropdown.value;
      selectedSizeSpan.textContent = selectedSize;
  });

  cartCounter.addEventListener("click", () => {
      clickCount = 0;
      cartCounter.style.display = "none";
      quantitySpan.textContent = "0";

      // Reset the "Quantity" in the miniWindow
      const miniWindowQuantity = document.getElementById("Quantity");
      if (miniWindowQuantity) {
          miniWindowQuantity.textContent = "0";
      }

      selectedSizeSpan.textContent = "Size"; // Reset the selected size
  });
};



////////////////////////////////
/////////////////////
///////////

const reviews = [
    { id: 1, username: 'John', rating: 4, comment: 'Great product!' },
    { id: 2, username: 'Lily', rating: 5, comment: 'Excellent quality!' },
    { id: 3, username: 'Mark', rating: 3, comment: 'Good, but could be better.' },
];

function showReviews() {
    const reviewsContainer = document.getElementById('reviewsList');
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <p><strong>${review.username}</strong></p>
            <p>Rating: ${getHTMLRating(review.rating)}</p>
            <p>${review.comment}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

function getHTMLRating(rating) {
    const starIcons = Array(5).fill('').map((_, index) =>
    `<i class="${index < Math.round(rating) ? 'fas' : 'far'} fa-star" style="color: ${index < Math.round(rating) ? '#fdd835' : '#fdd835'};"></i>`
    );
    return starIcons.join('');
}

let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    updateRating();
}

function updateRating() {
    Array.from({ length: 5 }, (_, i) => {
        const starElement = document.getElementById(`star${i + 1}`);
        starElement.textContent = i < currentRating ? 'star' : 'star_border';
        starElement.classList.toggle('selected', i < currentRating);
    });
}

function submitReview() {
    const reviewInput = document.getElementById('reviewInput').value;
    const ratingName = document.getElementById('ratingName').value;
    const newReview = { id: reviews.length + 1, username: ratingName, rating: currentRating, comment: reviewInput };
    reviews.push(newReview);
    showReviews();
    currentRating = 0;
    updateRating();
    document.getElementById('reviewInput').value = '';
    document.getElementById('ratingName').value = '';
}


        /////////////////////
       // spanish version //
      /////////////////////

const opiniones = [
    { id: 1, username: 'John', rating: 4, comment: '¡Gran producto!' },
    { id: 2, username: 'Lily', rating: 5, comment: '¡Excelente calidad!' },
    { id: 3, username: 'Mark', rating: 3, comment: 'Bueno, pero podría ser mejor.' },
];

function mostrarOpiniones() {
    const contenedorOpiniones = document.getElementById('reviewsList');
    contenedorOpiniones.innerHTML = '';

    opiniones.forEach(opinion => {
        const elementoOpinion = document.createElement('div');
        elementoOpinion.classList.add('review');
        elementoOpinion.innerHTML = `
            <p><strong>${opinion.username}</strong></p>
            <p>Valoración: ${obtenerHTMLRating(opinion.rating)}</p>
            <p>${opinion.comment}</p>
        `;
        contenedorOpiniones.appendChild(elementoOpinion);
    });
}

function obtenerHTMLRating(rating) {
    const iconosEstrella = Array(5).fill('').map((_, index) =>
    `<i class="${index < Math.round(rating) ? 'fas' : 'far'} fa-star" style="color: ${index < Math.round(rating) ? '#fdd835' : '#fdd835'};"></i>`
    );
    return iconosEstrella.join('');
}

let ratingActual = 0;

function establecerRating(rating) {
    ratingActual = rating;
    actualizarRating();
}

function actualizarRating() {
    Array.from({ length: 5 }, (_, i) => {
        const elementoEstrella = document.getElementById(`star${i + 1}`);
        elementoEstrella.textContent = i < ratingActual ? 'star' : 'star_border';
        elementoEstrella.classList.toggle('selected', i < ratingActual);
    });
}

function enviarOpinion() {
    const inputOpinion = document.getElementById('reviewInput').value;
    const nombreRating = document.getElementById('ratingName').value;
    const nuevaOpinion = { id: opiniones.length + 1, username: nombreRating, rating: ratingActual, comment: inputOpinion };
    opiniones.push(nuevaOpinion);
    mostrarOpiniones();
    ratingActual = 0;
    actualizarRating();
    document.getElementById('reviewInput').value = '';
    document.getElementById('ratingName').value = '';
}

        /////////////////////
       // armenian version //
      /////////////////////

      const reviewshy = [
        { id: 1, username: 'Ջոն', rating: 4, comment: 'Հոյակապ ապրանք!' },
        { id: 2, username: 'Լիլի', rating: 5, comment: 'Լավագույն որակ!' },
        { id: 3, username: 'Մարկ', rating: 3, comment: 'Լավ է, բայց կարող էր ավելի լավ լինել։' },
    ];
    
    function displayReviews() {
        const reviewsListContainer = document.getElementById('reviewsList');
        reviewsListContainer.innerHTML = '';
    
        reviewshy.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review');
            reviewItem.innerHTML = `
                <p><strong>${review.username}</strong></p>
                <p>Կարծիքը: ${getStarRatinghyHTML(review.rating)}</p>
                <p>${review.comment}</p>
            `;
            reviewsListContainer.appendChild(reviewItem);
        });
    }
    
    function getStarRatinghyHTML(rating) {
        const starIcons = Array(5).fill('').map((_, index) =>
            `<i class="${index < Math.round(rating) ? 'fas' : 'far'} fa-star" style="color: ${index < Math.round(rating) ? '#fdd835' : '#fdd835'};"></i>`
        );
        return starIcons.join('');
    }
    
    let currentRatinghy = 0;
    
    function setRatinghy(rating) {
        currentRatinghy = rating;
        updateStarRating();
    }
    
    function updateStarRating() {
        Array.from({ length: 5 }, (_, i) => {
            const starElement = document.getElementById(`star${i + 1}`);
            starElement.textContent = i < currentRatinghy ? 'star' : 'star_border';
            starElement.classList.toggle('selected', i < currentRatinghy);
        });
    }
    
    function submitReviewhy() {
        const reviewInput = document.getElementById('reviewInput').value;
        const ratingName = document.getElementById('ratingName').value;
        const newReview = { id: reviewshy.length + 1, username: ratingName, rating: currentRatinghy, comment: reviewInput };
        reviewshy.push(newReview);
        displayReviews();
        currentRatinghy = 0;
        updateStarRating();
        document.getElementById('reviewInput').value = '';
        document.getElementById('ratingName').value = '';
    }
    


//////////////////////////////////
//////////////////////
//////////////

function toggleDropdown() {
    var menu = document.getElementById('languageMenu');
    menu.classList.toggle('active');
}

function changeLanguage(lang) {
    const fileNames = {
        'en': 'index.html',
        'es': 'indexes.html',
        'hy': 'indexhy.html'
    };

    window.location.href = fileNames[lang];
    toggleDropdown();
}



//////////////////////////////////
//////////////////////
/////////////

function login() {

    var username = document.getElementById('customName').value;
    var password = document.getElementById('customPassword').value;
    var email = document.getElementById('customEmail').value;

    if (username && password) {
        document.getElementById('login').style.display = "none"
        document.getElementById('userDashboard').style.display = 'block';
        document.getElementById('loggedInUser').innerText = username;
        document.getElementById('loggedInEmail').innerText = email;
        document.getElementById('loggedInPassword').innerText = password;
        alert('Login successful!');
    }
}

function register() {
    var username = document.getElementById('customName').value;
    var email = document.getElementById('customEmailReg').value;
    var password = document.getElementById('customPasswordReg').value;
    var confirmPassword = document.getElementById('customConfirmPassword').value;

        if (password === confirmPassword) {
            document.getElementById('signup').style.display = "none";
            document.getElementById('userDashboard').style.display = 'block';
            document.getElementById('loggedInUser').innerText = username;
            document.getElementById('loggedInEmail').innerText = email;
            document.getElementById('loggedInPassword').innerText = password;
            alert('Registration successful!');
        }
    } 

function logout() {
    document.getElementById('userDashboard').style.display = 'none';
    document.getElementById('loggedInUser').innerText = '';
    document.getElementById('loggedInEmail').innerText = '';
    document.getElementById('loggedInPassword').innerText = '';
}

function OpenUserSet() {
    document.getElementById('OpenUserSet').style.display = 'block';
    document.getElementById('logoutBtn').style.display = 'block';
}

document.getElementById('XuserBtn').addEventListener('click', function () {
    document.getElementById('OpenUserSet').style.display = 'none';
});

function showSignupForm() {
    document.getElementById('login').style.display = 'none'
    document.getElementById('signup').style.display = 'block'
}

function showLoginForm() {
    document.getElementById('login').style.display = 'block'
    document.getElementById('signup').style.display = 'none'
}

function TouchLoginBtn() {
    document.getElementById('login').style.display = 'block'
    document.getElementById('signup').style.display = 'none'
}

function TouchSignupBtn() {
    document.getElementById('signup').style.display = 'block'
    document.getElementById('login').style.display = 'none'
}





document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('customName').value;
        var password = document.getElementById('customPassword').value;

        if (!username || !email || !password) {
            return;
        }

        if (!username || !password) {
            alert('Please enter a username and password.');
            return;
        }

        handleUserLogin(username, email, password);
    });

    document.getElementById('customRegistrationForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('customNameReg').value.trim();
        var surname = document.getElementById('customSurname').value.trim();
        var email = document.getElementById('customEmailReg').value.trim();
        var password = document.getElementById('customPasswordReg').value.trim();
        var confirmPassword = document.getElementById('customConfirmPassword').value.trim();

        if (!username || !surname || !email || !password || !confirmPassword) {
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
        }

        handleUserRegistration(username, email, password);
    });

    document.getElementById('cterms').addEventListener('click', function (event) {
        event.preventDefault();
    });


    function handleUserRegistration(username, email, password) {
        document.getElementById('signup').style.display = 'none';
        showUserDashboard(username, email, password);
        document.getElementById('customRegistrationForm').reset();
    }

    function showUserDashboard(username, email, password) {
        document.getElementById('userDashboard').style.display = 'block';
        document.getElementById('loggedInUser').innerText = username;
        document.getElementById('loggedInEmail').innerText = email;
        document.getElementById('loggedInPassword').innerText = password;
    }
});
