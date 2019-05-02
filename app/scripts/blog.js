"use strict";

const blogSections = document.getElementsByClassName('blog-sections');
const curate = document.getElementsByClassName('curate');
const design = document.getElementsByClassName('design');
const header = document.getElementsByTagName('header')[0];

// console.log(blogSections[0]);
// console.log(header);

// let header = document.getElementsByTagName('header');
console.log(header);


window.onscroll = function () {
  console.log(header.scrollTop, document.documentElement.scrollTop);


  if (document.documentElement.scrollTop > 50 && document.documentElement.scrollTop < 100 || document.documentElement.scrollTop > 200) {
    console.log("scroll");

    header.classList.add("sticky");
    if (document.documentElement.scrollTop < 100) {
      document.documentElement.scrollTop = 100;
    }
    console.log("sticky");
    // setTimeout(function(){ console.log("timer!"); }, 3000);
  }
  else if (document.documentElement.scrollTop == 0) {
    setTimeout(function(){ header.classList.remove("sticky"); }, 500);
    // header.classList.remove("sticky");
    console.log("not sticky");

  }
};

// when you mouse over "curate" or "design" the matching text appears in an overlay