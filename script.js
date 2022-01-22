let section = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header nav a');

      window.onscroll = () =>{

        section.forEach(sec =>{

          let top = window.scrollY;
          let offset = sec.offsetTop;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          if (top >= offset - 500 && top < offset + height){
            navLinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
          }
        })
      }

function layoutHandler() {
    let screenSize = window.innerWidth; 
        if (screenSize < 900 && screenSize >= 640) {
            navLinks.forEach(links =>{
                links.style = "padding: 10px 25px;";
            });
        } else if (screenSize < 640) {
            navLinks.forEach(links =>{
                links.style = "padding: 5px 10px; margin: 0;"
            });
        } else {
                navLinks.forEach(links =>{
                    links.style = "";
                });
    }
}


window.onresize = layoutHandler;
layoutHandler()

function copyFunction() {
    navigator.clipboard.writeText("minhnguyen14797@gmail.com");
    const copyText = document.getElementsByClassName('copy-text')[0];
    copyText.style.display = 'block'
    setTimeout (function() {
      copyText.style.display = 'none';
    }, 1000)
}

const modals = document.querySelectorAll('.modal');
const btn = document.querySelectorAll('div.card');
const exits = document.getElementsByClassName('close-btn');


btn.forEach (i => {
  
  i.onclick = () => {
    let endPoint = i.getAttribute('modal-id')
    modals.forEach (
      modal => {
        if (modal.id == endPoint) {
          modal.classList.add('show')
          currentModal = modal
        }
      }
    )
  }
})

window.onclick = (event) => {
  if (event.target.classList.contains('modal') || event.target.classList.contains('close-btn')) {
    currentModal.classList.add('fade-out')
    setTimeout(() => {
      currentModal.classList.remove('fade-out')
      currentModal.classList.remove('show')
    }, 300)
  }
}