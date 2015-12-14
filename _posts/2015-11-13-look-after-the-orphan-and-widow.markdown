---
layout: post
title:  "Look after the Orphan and Widow"
date:   2015-11-13 6:35:00 -0500
categories: code 
---

The bible is very clear when it comes to how we should treat orphans and widows. Don't be a doof- look after them. Add this script to your project, and cruise right thru the pearly gates.

<br>

{% highlight javascript %}
var seekJustice = function(paragraphs) {
  for (i=0; i < paragraphs.length; i++) {
    var words = paragraphs[i].textContent.split(" ");
    if (words.length > 1) {
      words[words.length - 2] += "&nbsp;" + words[words.length - 1];
      words.pop();
      paragraphs[i].innerHTML = (words.join(" "));
    }
  }
}

// Inits
document.addEventListener("DOMContentLoaded", function(event) { 
  seekJustice(document.getElementsByTagName("p"));
});
{% endhighlight %}

This in no way reflects my true feelings about widows, orphans, or the bible. Sheeesh. 

