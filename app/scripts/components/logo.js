"use strict";

const logo = {
  template: `
  <section class="logo">
    <div class="devjaq-square">
      <h1 class="devjaq">devJaq</h1>
      <div class="bg-circle"></div>
    </div>
    <h2 class="myname"> by Jaq Aimee</h2>
  </section>
  `
};

angular.module("Site").component("logo", logo);
