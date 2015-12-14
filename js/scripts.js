// Font Smoothie copyright 2013,14,15 Torben Haase <http://pixelsvsbytes.com>
// Source-URL <https://gist.github.com/letorbi/5177771>
(function(){function a(){function e(a){if(null===a.cssRules)return console.warn("Fontsmoothie warning: Browser blocks access to CSS rules in "+a.href);for(var b=a.href||location.href,b=new RegExp(b.substring(0,b.lastIndexOf("/")).replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"g"),c,f=0;c=a.cssRules[f];f++){if(c.style&&c.style.src&&(c.style.src=c.style.src.replace(b,".").replace(/([^;]*?),\s*(url\(\S*? format\(["']?svg["']?\))([\s,]*[^;]+|)/,"$2, $1$3"),window.opera)){var d=c.cssText;a.deleteRule(f); a.insertRule(d,f)}c.styleSheet&&e(c.styleSheet)}}try{var a=document.getElementsByTagName("HEAD")[0],h=a.appendChild(document.createElement("CANVAS")),b=h.getContext("2d");b.textBaseline="top";b.font="32px Arial";b.fillText("O",0,0);for(var d,k=0;255==b.getImageData(5,8,1,1).data[3]&&(d=document.styleSheets[k]);k++)d&&e(d);a.removeChild(h)}catch(g){throw g;}}if(-1<navigator.userAgent.toLowerCase().indexOf("windows nt 5.1"))if("complete"==document.readyState)a();else{var g=window.onload;window.onload= window.onload?function(e){g(e);a()}:a}})();

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
//app.seekJustice(document.getElementsByTagName("p"));
app.seekJustice(document.getElementsByTagName("h1"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZvbnQgU21vb3RoaWUgY29weXJpZ2h0IDIwMTMsMTQsMTUgVG9yYmVuIEhhYXNlIDxodHRwOi8vcGl4ZWxzdnNieXRlcy5jb20+XG4vLyBTb3VyY2UtVVJMIDxodHRwczovL2dpc3QuZ2l0aHViLmNvbS9sZXRvcmJpLzUxNzc3NzE+XG4oZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7ZnVuY3Rpb24gZShhKXtpZihudWxsPT09YS5jc3NSdWxlcylyZXR1cm4gY29uc29sZS53YXJuKFwiRm9udHNtb290aGllIHdhcm5pbmc6IEJyb3dzZXIgYmxvY2tzIGFjY2VzcyB0byBDU1MgcnVsZXMgaW4gXCIrYS5ocmVmKTtmb3IodmFyIGI9YS5ocmVmfHxsb2NhdGlvbi5ocmVmLGI9bmV3IFJlZ0V4cChiLnN1YnN0cmluZygwLGIubGFzdEluZGV4T2YoXCIvXCIpKS5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZyxcIlxcXFwkJlwiKSxcImdcIiksYyxmPTA7Yz1hLmNzc1J1bGVzW2ZdO2YrKyl7aWYoYy5zdHlsZSYmYy5zdHlsZS5zcmMmJihjLnN0eWxlLnNyYz1jLnN0eWxlLnNyYy5yZXBsYWNlKGIsXCIuXCIpLnJlcGxhY2UoLyhbXjtdKj8pLFxccyoodXJsXFwoXFxTKj8gZm9ybWF0XFwoW1wiJ10/c3ZnW1wiJ10/XFwpKShbXFxzLF0qW147XSt8KS8sXCIkMiwgJDEkM1wiKSx3aW5kb3cub3BlcmEpKXt2YXIgZD1jLmNzc1RleHQ7YS5kZWxldGVSdWxlKGYpOyBhLmluc2VydFJ1bGUoZCxmKX1jLnN0eWxlU2hlZXQmJmUoYy5zdHlsZVNoZWV0KX19dHJ5e3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiSEVBRFwiKVswXSxoPWEuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkNBTlZBU1wiKSksYj1oLmdldENvbnRleHQoXCIyZFwiKTtiLnRleHRCYXNlbGluZT1cInRvcFwiO2IuZm9udD1cIjMycHggQXJpYWxcIjtiLmZpbGxUZXh0KFwiT1wiLDAsMCk7Zm9yKHZhciBkLGs9MDsyNTU9PWIuZ2V0SW1hZ2VEYXRhKDUsOCwxLDEpLmRhdGFbM10mJihkPWRvY3VtZW50LnN0eWxlU2hlZXRzW2tdKTtrKyspZCYmZShkKTthLnJlbW92ZUNoaWxkKGgpfWNhdGNoKGcpe3Rocm93IGc7fX1pZigtMTxuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcIndpbmRvd3MgbnQgNS4xXCIpKWlmKFwiY29tcGxldGVcIj09ZG9jdW1lbnQucmVhZHlTdGF0ZSlhKCk7ZWxzZXt2YXIgZz13aW5kb3cub25sb2FkO3dpbmRvdy5vbmxvYWQ9IHdpbmRvdy5vbmxvYWQ/ZnVuY3Rpb24oZSl7ZyhlKTthKCl9OmF9fSkoKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBTZXR0aW5nc1xudmFyIENvbnNvbGUgPSBjb25zb2xlLFxuICAgIGFwcCA9IHt9LFxuICAgIGJpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iaW8nKSB8fCBmYWxzZTtcblxuLy8gRnVuY3Rpb25zXG5hcHAuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gIGlmKGJpby5vZmZzZXRIZWlnaHQgPiAod2luZG93LmlubmVySGVpZ2h0IC0gMjApKSB7XG4gICAgYmlvLmNsYXNzTmFtZSA9IGJpby5jbGFzc05hbWUucmVwbGFjZSgvXFxzYWxpZ24tY2VudGVyL2csIFwiXCIpO1xuICB9IGVsc2Uge1xuICAgIGlmKGJpby5jbGFzc05hbWUuaW5kZXhPZihcImFsaWduLWNlbnRlclwiKSA8PSAtMSkge1xuICAgICAgYmlvLmNsYXNzTmFtZSA9IGJpby5jbGFzc05hbWUgKyBcIiBhbGlnbi1jZW50ZXJcIjtcbiAgICB9XG4gIH1cbn1cbmFwcC5zZWVrSnVzdGljZSA9IGZ1bmN0aW9uKHBhcmFncmFwaCkge1xuICBmb3IgKGk9MDsgaSA8IHBhcmFncmFwaC5sZW5ndGg7IGkrKykge1xuICAgIHZhciB3ID0gcGFyYWdyYXBoW2ldLnRleHRDb250ZW50LnNwbGl0KFwiIFwiKTtcbiAgICBpZiAody5sZW5ndGggPiAxKSB7XG4gICAgICB3W3cubGVuZ3RoIC0gMl0gKz0gXCImbmJzcDtcIiArIHdbdy5sZW5ndGggLSAxXTtcbiAgICAgIHcucG9wKCk7XG4gICAgICBwYXJhZ3JhcGhbaV0uaW5uZXJIVE1MID0gKHcuam9pbihcIiBcIikpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBCaW8gUGFnZVxuaWYoYmlvKSB7XG4gIC8vIEFjdGlvbnNcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgYXBwLnNldEhlaWdodCk7XG5cbiAgLy8gSW5pdHNcbiAgYXBwLnNldEhlaWdodCgpO1xufTtcblxuLy8gSW5pdHNcbi8vYXBwLnNlZWtKdXN0aWNlKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKSk7XG5hcHAuc2Vla0p1c3RpY2UoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoMVwiKSk7XG4iXSwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
