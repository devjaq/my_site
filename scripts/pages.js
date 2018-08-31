"use strict";

const home = {
  template: `
  <main>
    <section class="content">
      <h3>Hi, thanks for being here!</h3>
      <p>I'm a junior web developer specializing in JavaScript, HTML, CSS, and PHP. </p>
      <p>I learned JavaScript from the Grand Circus Detroit coding bootcamp and I'm currently learning PHP and WordPress on my own. I'm currenly looking for a full-time position and projects to work on!</p>
      <p>If you are here to learn a few things <!--<a href="#!/about">-->about me<!--</a>-->, why don't you check out my <a href="Jacquelyn_Resume.pdf" target="_blank">résumé</a> and <a href="https://github.com/devjaq">portfolio</a>?</p>
    </section>
    <section class="content">
      <p>My non-technical background tells you that I have strong teamwork and communication skills as well as a drive to provide an elegant experience for users. Feel free to ask me why sometime! (Spoiler: both of my previous fields are plagued with bad software)</p>
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