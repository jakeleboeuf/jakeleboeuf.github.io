---
layout: post
title:  "The Magic jQuery IIFE"
date:   2015-12-6 9:59:00 -0500
categories: code 
---

You're all stoked to get going on a new project. Everything seems to be coming together faster than ever, but your little `console.log('hi jake!')` smoke signal isn't burning. Instead, you're getting an obnoxious `$ is not defined`. You're 100% sure you included jQuery before your script, and I'm 100% sure you need to wrap your code in an [IIFE](http://benalman.com/news/2010/11/immediately-invoked-function-expression/). Not just any old IIFE– one that hands a `$` reference to jQuery. 

<br>

####Just do this, and have a great day!
{% highlight javascript %}
(function($){
  // Oh man, so many codes! 
}(jQuery));
{% endhighlight %}

Hopefuly you want to understand what's happening behind the scenes– [Greg Franko](https://twitter.com/GregFranko) does a great job explaining why [he loves his iife](http://gregfranko.com/blog/i-love-my-iife/), and gives some great examples of how we can use them to make our lives better.
