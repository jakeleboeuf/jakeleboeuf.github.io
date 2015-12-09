---
layout: post
title:  "The Magic jQuery IIFE"
date:   2015-12-6 9:59:00 -0500
categories: code 
---

You're all stoked to get into a new project, but you keep getting an obnoxious `$ is not defined`. You're 100% sure you included jQuery before your script, and I'm 100% sure you need to wrap your code in an [IIFE](http://gregfranko.com/blog/i-love-my-iife/). Not just any old IIFE– one that throws in a reference to jQuery as `$`. 

<br>

####Do this, and have a great day!
{% highlight javascript %}
(function($){
  // Oh man, so many codes! 
}(jQuery));
{% endhighlight %}
