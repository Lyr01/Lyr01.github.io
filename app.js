function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}



const toggleVideo = (nomeVideo) => {
    let myVideo = document.getElementById(nomeVideo);
    myVideo.style.display = 'block';
    myVideo.requestFullscreen();

    document.getElementById(nomeVideo).addEventListener('fullscreenchange', (event) => {
        // document.fullscreenElement will point to the element that
        // is in fullscreen mode if there is one. If not, the value
        // of the property is null.
        if (document.fullscreenElement) {
          console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
        } else {
          console.log('Leaving full-screen mode.');
          myVideo.style.display = 'none';
        }
      });
}   


