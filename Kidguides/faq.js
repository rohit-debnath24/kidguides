const containers = document.querySelectorAll('.container');

containers.forEach((container) => {
    const icon = container.querySelector('.icon');
    const answer = container.querySelector('.answer');

    container.addEventListener('click', () => {
        // icon.classList.toggle('active');
        // answer.classList.toggle('active');

        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;

        } else {
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight+"px";
        }
    })
})

/***************************************************************************************************/

// Get the modal and the open/close buttons
const modal = document.getElementById("termsModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const acceptBtn = document.getElementById("acceptBtn");

// Open the modal when the button is clicked
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the 'x' button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when the 'Agree' button is clicked
acceptBtn.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}




// *************** NEW PART **********************************************************************************

function toggleMenu() {
  document.querySelector('.navul').classList.toggle('active');
}

function toggleMenu() {
  document.querySelector('.navul').classList.toggle('active');
}



  function toggleMenu() {
    document.querySelector('.navul').classList.toggle('show');
  }



  function toggleMenu() {
    document.querySelector('.navul').classList.toggle('show');
  }
  // Optional: Close sidebar when a nav link is clicked
  document.querySelectorAll('.navul li a').forEach(function(link) {
    link.addEventListener('click', toggleMenu);
  });


  // ***************************************************************************
  
  function moveSocialToSidebar() {
    // Check if mobile view and the social icons haven't already been moved
    if (window.innerWidth <= 768) {
      var social = document.querySelector('.social');
      var navul = document.querySelector('.navul');
      if (social && navul && !navul.contains(social)) {
        navul.appendChild(social);
      }
    } else {
      // For desktop: move them back to the topbar if needed
      var social = document.querySelector('.social');
      var topbar = document.querySelector('.topbar');
      if (social && topbar && !topbar.contains(social)) {
        topbar.appendChild(social);
      }
    }
  }
  window.addEventListener('DOMContentLoaded', moveSocialToSidebar);
  window.addEventListener('resize', moveSocialToSidebar);


