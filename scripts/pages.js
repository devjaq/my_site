"use strict";

const home = {
  template: `
  <main>
    <section class="content flex-sm-column fifties-border">
      <h3>Hi, thanks for being here!</h3>
      <p>I am a new front-end web developer who just graduated from a Grand Circus coding bootcamp. I'm currenly looking for a full-time position and projects to work on!</p>
      <p>If you are here to learn a few things <!--<a href="#!/about">-->about me<!--</a>-->, why don't you check out my <a href="Resume.pdf" target="_blank">résumé</a> and <a href="https://github.com/devjaq">portfolio</a>?</p>
    </section>
    <section class="content flex-sm-column fifties-border">
      <p>Currently I'm a graduate of the front-end bootcamp at Grand Circus Detroit.</p>
      <p> I have a unique background which helped foster a particular set of skills. Attention to detail came from a patent law firm, teamwork from professionally cooking, and my ability to work under pressure came from both. </p>
      <p>I’m looking for opportunities as an entry-level developer where I will be encouraged to learn from and work with more experienced mentors.</p>
  </section>
  </main>
  `,
  controller: () => {
    const vm = this;


  }
} // end component "home"

// const about = {
//   template: `
//   <main>
//   <section class="content flex-sm-column fifties-border">
//     <p>I am currently studying front end development at Grand Circus Detroit, but I have an eclectic background which has taught me a unique skill set. I learned attention to detail at a patent law firm, teamwork as a cook, and the ability to work under pressure in both. I’m looking for opportunities as an entry-level developer where I will have chances to learn from and work with more experienced mentors.</p>
//   </section>
// </main>
//   `
// }

const resume = {
  template: `
    
    <object
    class="resume" 
    data="Resume.pdf"
    ></object>

    <!--
    <img src="Resume.pdf"></img>
    -->

  `
}


angular
  .module("Site")
  .component("home", home)
  // .component("about", about)
  .component("resume", resume)