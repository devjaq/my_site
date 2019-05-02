"use strict";

const myHeader = {
  templateUrl: `html-snippets/header.html`

}

angular
  .module("Site")
  .component("myHeader", myHeader);