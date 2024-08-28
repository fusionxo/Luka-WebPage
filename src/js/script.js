document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.button-primary').forEach(button => {
    button.addEventListener('mousemove', function (e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = (x - centerX) / centerX * 1.5;
      const deltaY = (y - centerY) / centerY * 1.5;

      button.style.background = `radial-gradient(circle at ${x}px ${y}px, #8e68f7, #977FD7)`;
      button.style.transform = `perspective(500px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * -10}deg)`;
      button.style.filter = 'brightness(1.2)';
    });

    button.addEventListener('mouseleave', function () {
      button.style.transition = 'background 0.5s ease, transform 0.5s ease, filter 0.5s ease';
      button.style.background = 'linear-gradient(45deg, #977FD7, #8e68f7)';
      button.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
      button.style.filter = 'brightness(1)';
    });

    button.addEventListener('click', function (e) {
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement('span');
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});


function toggleMenu() {
  var menu = document.querySelector('.topnav .menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}

function hidev200() {
  var x = document.getElementById("V5.9.0");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function hidev100() {
  var x = document.getElementById("V3.0.0");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function startuphide() {
  document.getElementById("V5.9.0").style.display = "none";
}

function startuphide() {
  document.getElementById("V3.0.0").style.display = "none";


}
