"use strict";


angular
  .module("Site", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/home", {
        template: `<home></home>`
      })
      .when("/about", {
        template: `<about></about>`
      })
      .otherwise({
        redirectTo: `/home`
      })
  });