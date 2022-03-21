

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

        .fade-buffer {
          position: fixed;
          bottom: 66px;
          width: 100vw;
          height: 0px;
        }
        
        .footer-fade {
          width: auto;
          height: 0.2vw;
          
          position: relative;
          bottom: 0.2vw;
          
          opacity: 0.9;
          background-color: #EEEEEE;
        }
        
        .footer-spacer {
          position: relative;
          width: auto;
          height: 4vw;
        }
      </style>
      
      
      <div class='footer-spacer'></div>
      <div class='fade-buffer'>
        <div class='footer-fade'>
          <div class='footer-fade'>
            <div class='footer-fade'>
              <div class='footer-fade'>
                <div class='footer-fade'>
                  <div class='footer-fade'>
                    <div class='footer-fade'>
                      <div class='footer-fade'>
                        <div class='footer-fade'>
                          <div class='footer-fade'>
                            <div class='footer-fade'>
                              <div class='footer-fade'>
                                <div class='footer-fade'>
                                  <div class='footer-fade'>
                                    <div class='footer-fade'>
                                      <div class='footer-fade'>
                                        <div class='footer-fade'>
                                          <div class='footer-fade'>
                                            <div class='footer-fade'>
                                              <div class='footer-fade'>
                                                <div class='footer-fade'>
                                                  <div class='footer-fade'>
                                                    <div class='footer-fade'>
                                                      <div class='footer-fade'>
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
