const pageTemplate = document.createElement('template');

pageTemplate.innerHTML = `
  <style>
    @font-face {
      font-family: 'Comic Sans MS';
      src: url("/resources/fonts/comic-sans-ms/comici.ttf");
    }

    .flex {
      display: flex;
    }

    a {
      text-decoration: none;
    }

    /* styling for the title */

    /* a bit of a janky way to set the header area to be on top of the main area, maybe change later*/
    .header {
      position: absolute; 
      z-index: 2; 
      top: 0px; 
      left: 10px; 
      display: flex;
    }

    .speech-bubble {
      background-color: white; 
      font-size: xx-large; 
      height: min-content; 
      border-radius: 50px; 
      padding: 20px;
    }

    .speech-bubble-tail {
      width: 0; 
      height: 0; 
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent; 
      border-right:30px solid white;
      margin-top: 73px;
    }

    .speech-bubble-text {
      font-family: 'Comic Sans MS';
    }

    .speech-bubble-text-arrange {
      display: flex; 
      align-items: flex-end; 
      justify-content: space-between;
    }

    .speech-bubble-gif {
      width: 40%;
      height: auto;
      margin-right: 15px;
    }

    .title-image {
      width: 180px;
    }


    /* styling for the building */
    .building-main {
      display: flex;
      width: 157px;
      background-image: url(/resources/images/seamless-red-brick-wall-texture.jpg);
      background-repeat: repeat;
      background-size: 50px;
      justify-content: center;
    }

    .building-top {
      width: 150px;
      height: 50px;
      transform: skew(-20deg);
      background-color: darkgrey;
      border: solid gray;
      margin-left: 10px;
    }

    .building-side {
      width: 20px;
      transform: skewY(-70deg);
      background-image: url(/resources/images/seamless-red-brick-wall-texture.jpg);
      background-repeat: repeat;
      background-size: 50px;
      margin-top: -29px;
      margin-bottom: 27px;
    }

    .background-tint {
      background-color: rgba(0, 0, 0, 0.4);
      background-blend-mode: multiply;
    }

    .building-window {
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 10px solid lightgray;
      border-top: 2px solid white;
      border-left: 2px solid white;
      border-right: 2px solid white;
      width: 50px;
      height: 55px;
      padding: 5px;
      margin: 40px;
      color: white;
      font-weight: 1000;
      text-decoration: none;
      font-family: 'Comic Sans MS';
    }

    .building-window:hover, .building-window:active, .selected{
      background-color: rgb(255, 217, 0);
      color: black;
    }


    /* styling for main content */

    .main {
      position: absolute; 
      z-index: 1; 
      top: 150px; 
      left: 0px; 
      display: flex;
    }

    .content {
      display: flex;
      max-width: 1000px;
      border: 5px outset rgb(80, 41, 112);
      margin-left: 10px;
      color: black;
    }

    .content-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -1px;
      padding: 0px 20px;
      background-color: rgb(27, 0, 49);
      color: white;
      height: 4rem;
      text-decoration: underline;
    }

    .circle {
      border-radius: 50%;
      border-style: outset;
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }

    .pink {
      background-color: fuchsia;
    }

    .blue {
      background-color: aqua;
    }

    .orange {
      background-color: rgb(255, 82, 13);
    }

  </style>


  <div>
    <div class="header">
      <img class="title-image" src="/resources/images/Smeargle billboard.png">
      <div class="speech-bubble-tail"></div>
      <div class="speech-bubble">
        <div class="speech-bubble-text-arrange">
          <div class="speech-bubble-text">im</div>
          <img class="speech-bubble-gif" src="/resources/images/constructionpikachu.gif" />
        </div>
        <div class="speech-bubble-text">invisiblewalrus!!</div>
      </div>
    </div>
    <div class="main">
      <div>
        <div class="building-top"></div>
        <div class="flex">
          <div class="building-main">
            <!--remove this div and fix the building main class-->
            <div>
              <a href="/index.html">
                <div class="building-window">
                  about <br>
                  me
                </div>
              </a>
              <a href="/media_log/2024/index.html">
                <div class="building-window">
                  media <br>
                  log
                </div>
              </a>
              <a>
                <div class="building-window">
                  my <br>
                  art
                </div>
              </a>
              <a>
                <div class="building-window">
                  favs <br>
                  shrine
                </div>
              </a>
            </div>
          </div>
          <div class="building-side background-tint"></div>
        </div>
      </div>
      <div class="content">
        <div>
          <div class="content-title">
              <slot name="page-title"> 
                <h1>title</h1> 
              </slot>
              <div class="flex">
                <div class="pink circle"></div>
                <div class="blue circle"></div>
                <div class="orange circle"></div>
              </div>
          </div>
          <slot name="page-content">
            <div>text</div>
          </slot>
        </div>
      </div>
    </div>
  </div>
`;


class Page extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    const shadowRoot = this.attachShadow({mode:'closed'});
    shadowRoot.appendChild(pageTemplate.content);
  }
}

customElements.define('main-page', Page);