"use strict";

const logo = {
  template: `
  <section class="logo">
    <h1 class="dev-jaq">devJaq</h1>
    <h2 class="myname"> by Jaq Aimee</h2>
  </section>
  `
}

angular
  .module("Site")
  .component("logo", logo)