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
app.seekJustice = function(paragraph) {
  for (i=0; i < paragraph.length; i++) {
    var w = paragraph[i].textContent.split(" ");
    if (w.length > 1) {
      w[w.length - 2] += "&nbsp;" + w[w.length - 1];
      w.pop();
      paragraph[i].innerHTML = (w.join(" "));
    }
  }
}

// Bio Page
if(bio) {
  // Actions
  window.addEventListener("resize", app.setHeight);

  // Inits
  app.setHeight();
};

// Inits
document.addEventListener("DOMContentLoaded", function(event) { 
  app.seekJustice(document.getElementsByTagName("p"));
  app.seekJustice(document.getElementsByTagName("h1"));
});
