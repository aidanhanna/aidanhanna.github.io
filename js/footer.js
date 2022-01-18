

/********************\
* Implements footer  *
* for each page in a *
* single file for    *
* easier iteration   *
\********************/

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        /******************\
        | FORMAT OF FOOTER |
        \******************/

        .footer-buffer {
          display: block;
          width: 100vw;
          height: calc(50px + 5vw);
        }

        .footer {
          position: fixed;
          bottom: 0px;

          width: 100vw;
          height: 50px;

          background-color: #EEEEEE;
        }

        .footer-text-wrapper {
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          height: 0px;
          width: auto;
        }

        .footer-text {
          position: relative;
          display: inline-block;
          transform: translate(-0%, -50%);
          margin-left: 5vw;
          margin-right: 5vw;

          height: auto;
          width: auto;

          font-size: 15px;
          color: #555555;
        }
        
        .footer-fade {
          width: auto;
          height: 2px;
          
          position: relative;
          bottom: 2px;
          
          opacity: 0.8;
          background-color: red;
        }

      </style>
      
      <div class='footer-buffer'>
        <div class='footer-fade>
          <div class='footer-fade>
            <div class='footer-fade>
              <div class='footer-fade>
                <div class='footer-fade>
                  <div class='footer-fade>
                    <div class='footer-fade>
                      <div class='footer-fade>
                        <div class='footer-fade>
                          <div class='footer-fade>
                            <div class='footer-fade>
                              <div class='footer-fade>
                                <div class='footer-fade>
                                  <div class='footer-fade>
                                    <div class='footer-fade>
                                      <div class='footer-fade>
                                        <p></p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class='footer'>
        <div class='footer-text-wrapper'>
          <a class='footer-text'>Email: aidanhanna125@gmail.com</a>
          <a class='footer-text' href='https://www.linkedin.com/in/aidan-hanna' target='_blank' rel='noopener noreferrer'>LinkedIn: https://www.linkedin.com/in/aidan-hanna</a>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-footer', Footer);
