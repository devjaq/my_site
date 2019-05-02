"use strict";

const blogSections = document.getElementsByClassName('blog-sections');
const curate = document.getElementsByClassName('curate');
const design = document.getElementsByClassName('design');
const header = document.getElementsByTagName('header')[0];

// console.log(blogSections[0]);
console.log(header);


window.onscroll = function () {

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    console.log("scroll");

    header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
}

