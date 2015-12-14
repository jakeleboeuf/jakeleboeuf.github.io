---
layout: post
title:  "The KFC hamburger menu"
subtitle: "A super slick animated menu icon"
date:   2015-12-4 11:03:12 -0500
categories: code 
---

A new [KFC.com](http://kfc.com) launched a few weeks ago. The chicken place. I still haven't made it too far into the site, but the nav icon animation caught my attention. It's simple, slick, and just snappy enough.

I love how much character this little guy has.

<br>

<p data-height="315" data-theme-id="0" data-slug-hash="RrwYKz" data-default-tab="result" data-user="jakeleboeuf" class='codepen'>See the Pen <a href='http://codepen.io/jakeleboeuf/pen/RrwYKz/'>KFC Hamburger Menu Animation</a> by Jake (<a href='http://codepen.io/jakeleboeuf'>@jakeleboeuf</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


<br>

###Let's [strip it down](https://www.youtube.com/watch?v=G2BWyY4B36Y) 
My goal in recreating this thing was to write as little code as possible. Because internet.

<br>

####HTML
{% highlight html %}
<div class="js-nav_trigger">
  <div class="nav-icon">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</div>
{% endhighlight %}

The HTML is straight forward. As indicated by the class name, that `js-nav_trigger` will be the selector we use to handle click events. Next, we'll setup our `nav-icon` and drop in 3 bars. Typical [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) mentallity would suggest we use a single `bar` element, and simply use the pseudo elements `:before` and `:after` for the first and last bars. However, we're doing some fancy things–  each bar will need it's own pseudo elements, so just trust me.

<br>

####SCSS
{% highlight scss %}
// Variables
$ease: cubic-bezier(.200,.60,.345,1);
$speed: 200ms; // Final transition time will be (speed * 2)

.nav-icon {
  position: absolute;
  cursor: pointer;
  top: calc(50% - 16px);
  left: calc(50% - 24px); // Typically 10px or something
  width: 24px;
  height: 16px;

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-top: 0;
    transform: translate3d(0,0%,0);
    transition: width $speed $ease ($speed * 2),
                margin-top $speed $ease $speed,
                transform $speed $ease $speed;

    // The :afters - where the magic happens
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      transform: rotate(0) translate3d(0,0,0);
      transition: transform $speed $ease;
    }
    &:nth-child(2) {
      width: 50%;
      margin-top: -1px;
      transform: translate3d(0,50%,0);
    }
    &:nth-child(3) {
      width: 75%;
      margin-top: -2px;
      transform: translate3d(0,100%,0);
      &:after {
        visibility: visible;
        transition: visibility 0ms linear $speed;
      }
    }

  }
  
  // Open state
  &.open {
    
    .bar {
      width: 100%;
      margin-top: -1px;
      transform: translate3d(0,50%,0);
      transition: width $speed $ease,
                  margin-top $speed $ease $speed,
                  transform $speed $ease $speed;

      &:after {
        transition: transform $speed $ease ($speed * 2);
      }
      &:nth-child(1) {
        &:after {
          transform: rotate(45deg)translate3d(0,0,0);
        }
      }
      &:nth-child(2) {
        &:after {
          transform: rotate(-45deg)translate3d(0,0,0);
        }
      }
      &:nth-child(3) {
        &:after {
          visibility: hidden;
          transition: visibility 0ms linear ($speed * 2);
        }
      }
    }

  }
}
{% endhighlight %}

Still with me? This is where all the magic happens. We'll go chop thru it, starting at the top.

First thing we do is set up a few variables so we can easily experiment with timing and easing without rewriting everything. Cool. Now we want to position the nav icon container. Notice the `left` property is centering that bad boy. You'll probably want that thing fixed to the left, so keep it classy– give it `left: 10px;`.

On to the bars. We first want to define the base styles for each bar element. They need to be absolutely positioned, full width and have some default transforms. You'll notice the piece that makes this animation so snappy is the transition setup. Pay close attention here. Because we want to animate things at different times, and to do this, we'll use the animation delay property wisely. Read the transition styles like:

{% highlight css %}
.bar {
  transition: property speed easing delay;
}
{% endhighlight %}

Those delays are all really important. We need to break the animation into 3 steps. 

- Resize
- Align
- Rotate


Remember, we defined `$speed: 200ms;`. So the `Resize` step should happen right away, lasting 200ms. The `Align` step should happen _after_ the `Resize` step is complete, so the delay needs to equal to the animation time of step 1: `$speed`. And finaly, we can move to the `Rotate` step. This needs to wait until both steps are complete, so the delay should be `($speed * 2)`.

Kinda make sense?

Because we need the ability to animate a few properties at diferent times, and maintain proportions, we'll use a `:after` pseudo element on each bar to represent the visible bar.

<br>

####JS
{% highlight javascript %}
(function(){
  'use strict';

  // Assign a few selectors
  var navTrigger = document.querySelector('.js-nav_trigger');
  var navIcon = document.querySelector('.nav-icon');

  // Toggle the close-nav class
  var toggleNav = function() {
    navIcon.classList.toggle('open');
  };

  // Listen for click event
  navTrigger.addEventListener('click', toggleNav);

})();
{% endhighlight %}

Nothing to see here. We are simply attaching a few event handlers to toggle the `open` class.

Okay.
