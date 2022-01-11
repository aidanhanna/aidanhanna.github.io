/********************\
* Implements header  *
* for each page in a *
* single file for    *
* easier iteration   *
\********************/

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .image-banner {
          position: relative;
          max-width: 100vw;
          /*background-color: #3282C8;*/
          text-align: center;
  
          padding: 0px;
          margin: 0px;
        }

        .banner-text {
          position: absolute;
          top: 5vw;
          left: 50%;
          transform: translate(-50%, -50%);
            
          width: 100vw;
          text-align: center;
          color: #F0F0F0;
          font-size: 7.5vw;
        }

        .banner-image {
          width: 100vw;
          height: auto;
        }


        /**********************\
        | FORMAT OF BUTTON BAR |
        \**********************/

        .button-bar {
          position: relative;
          display: block;
          width: 100vw;
          height: 50px;

          /*background-image: url('../images/ButtonFade.png');*/
          background-color: #D8D8D8;
          background-position: 0px 0px;
          background-repeat: repeat-y;
        }

        .menu-toggle {
          display: inline-block;
          float: left;
          height: 50px;
          width: 0px;
        }

        .dropdown-symbol {
          position: relative;
          transform: translate(0%, -50%);

          display: inline-block;
          height: 30px;
          width: 30px;
        }

        /* Name and Header Buttons */

        .name-button, .header-button {
          position: relative;
          display: inline-block;
          float: left;
          height: 50px;
          width: auto;
          z-index: 1;

          background-color: #D8D8D8;  
          /*background-image: url('../images/ButtonFade.png');
          background-position: 0px 0px;
          background-repeat: no-repeat;*/
        }

        .name-wrapper, .button-wrapper {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;

          height: 0px;
          width: auto;
          padding: 30px;
        }

        .name-text, .button-text {
          position: relative;
          transform: translate(0%, -50%);
          z-index: 1;

          display: inline-block;
          color: #333333;
          font-size: 25px;
          height: auto;
          width: auto;
        }

        .name-text {
          font-weight: bold;
        }

        .button-text {
          cursor: pointer;
        }

        .button-text:hover {
          color: #555555;
        }

        /* Subbuttons */

        .button-list {
          position: absolute;
          top: 50px;
          left: 15px;

          height: 0px;
          width: auto;

          overflow: hidden;
          z-index: 2;

          background-color: #EEEEEE;
        }

        .subbutton {
          position: relative;
          display: block;
          z-index: 2;

          height: 40px;
          width: auto;
        }

        .subbutton-wrapper {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;

          height: 0px;
          width: auto;
          padding: 15px;
        }

        .subbutton-text {
          position: relative;
          display: inline-block;
          transform: translate(-0%, -50%);
          z-index: 2;

          height: auto;
          width: auto;

          font-size: 18px;
          color: #333333;
          text-align: left;
          white-space: nowrap;
          cursor: pointer;
        }
      </style>
      <div class='button-bar'>
        <img class='menu-toggle' src='./images/badMenuButton.png' onclick='toggleMenu()'>

        <div class='name-button'>
          <div class='name-wrapper'>
            <a class='name-text'>Aidan Hanna</a>
          </div>
        </div>

        <div class='header-button' id='about-button'>
          <div class='button-wrapper'>
            <a class='button-text' id='home-text' href='./index.html'>Home</a>
            <!--<img class='dropdown-image' src='./images/badDropdown.png'>-->
          </div>
        </div>

        <div class='header-button' id='education-button'>
          <div class='button-wrapper'>
            <a class='button-text' id='education-text' onclick='toggleEd()'>Education</a>
          </div>
          <div class='button-list' id='education-list'>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./classes.html'>Classes</a>
              </div>
            </div>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./eleceng.html'>Electrical Engineering</a>
              </div>
            </div>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./compsci.html'>Computer Science</a>
              </div>
            </div>
          </div>
        </div>

        <!--
        <div class='header-button' id='experience-button'>
          <div class='button-wrapper'>
            <a class='button-text' id='experience-text' onclick='toggleExp()'>Experience</a>
          </div>
          <div class='button-list' id='experience-list'>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./intern.html'>Internships</a>
              </div>
            </div>
          </div>
        </div>
        -->

        <div class='header-button' id='interest-button'>
          <div class='button-wrapper'>
            <a class='button-text' id='interest-text' onclick='toggleInt()'>Interests</a>
          </div>
          <div class='button-list' id='interest-list'>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./game.html'>Game Design</a>
              </div>
            </div>
            <div class='subbutton'>
              <div class='subbutton-wrapper'>
                <a class='subbutton-text' href='./crochet.html'>Crochet</a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class='image-banner'>
        <img src='./images/OkayishBackground.png' class='banner-image'>
        <h1 class='banner-text'>Home</h1>
      </div>
    `;
  }
}

customElements.define('custom-header', Header);
