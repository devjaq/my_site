"use strict";

const blog = {
  template: `
  <p>testing</p>
  `
}

angular
  .module("App")
  .component("blog", blog);