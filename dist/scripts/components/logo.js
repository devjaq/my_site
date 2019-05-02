"use strict";

const logo = {
  template: `
  <section class="logo">
    <div class="logo-j"></div>
    <div class="logo-d"></div>
    <h1 class="devjaq">devJaq</h1>
    <h2 class="myname"> by Jaq Aimee</h2>
    
  </section>
  `
};

angular.module("Site").component("logo", logo);
