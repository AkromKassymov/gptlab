function reveal() {
  try {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function load() {
  try {
    var reveals = document.querySelectorAll('.load');
    for (var i = 0; i < reveals.length; i++) {
      reveals[i].classList.add('active');
    }
  } catch (e) {
    console.log(e);
  }
}

async function sendRequest() {
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  var contact = document.getElementById('contact').value;

  var data = {
    userName: name,
    message: message,
    userContact: contact,
  };
  fetch('https://tg-bot-silk.vercel.app/message', {
    method: 'POST',
    headers: {
      // cors
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', load);
const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  sendRequest();
  form.reset();
});

var modal = document.getElementsByClassName('modal')[0];
var btn = document.getElementById('myBtn');
var secondBtn = document.getElementById('button__connect');
var thirdBtn = document.getElementById('myBtn2');
var span = document.getElementsByClassName('close')[0];
var fourthBtn = document.getElementById('myBtn3');

if (fourthBtn) {
  fourthBtn.onclick = function () {
    modal.style.display = 'flex';
  };
}

btn.onclick = function () {
  modal.style.display = 'flex';
};
if (secondBtn) {
  secondBtn.onclick = function () {
    modal.style.display = 'flex';
  };
}
if (thirdBtn) {
  thirdBtn.onclick = function () {
    modal.style.display = 'flex';
  };
}
span.onclick = function () {
  modal.style.display = 'none';
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

(function () {
  let buttons = document.getElementsByClassName('position__btn');
  if (buttons) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = (e) => {
        modal.style.display = 'flex';
      };
    }
  }
})();
