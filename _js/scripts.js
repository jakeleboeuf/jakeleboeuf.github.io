'use strict';

// Settings
var Console = console,
    app = {},
    bio = document.querySelector('.bio') || false;

// Functions
app.setHeight = function() {
  if(bio.offsetHeight > (window.innerHeight - 20)) {
    bio.className = bio.className.replace(/\salign-center/g, "");
  } else {
    if(bio.className.indexOf("align-center") <= -1) {
      bio.className = bio.className + " align-center";
    }
  }
}

if(bio) {
  // Actions
  window.addEventListener("resize", app.setHeight);

  // Inits
  app.setHeight();
}
