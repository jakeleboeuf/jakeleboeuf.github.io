---
layout: post
title:  "Look after the Orphan and Widow"
date:   2015-11-13 6:35:00 -0500
categories: code 
---

When it comes to all kinds of orphans and widows, don't be a doof- look after them.

<br>

{% highlight javascript %}
var adopt = function(paragraphs) {
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
  adopt(document.getElementsByTagName("p"));
});
{% endhighlight %}

