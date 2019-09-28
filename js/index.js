@import url("https://fonts.googleapis.com/css?family=Poppins|Questrial&display=swap");

:root {
    --bg-color: rgb(10, 10, 10);
    --text-color: #fff;
    --background-url: url("../img/background.webp");
    --background-image: linear-gradient(
            90deg,
            rgba(10, 10, 10, 0.3),
            rgb(10, 10, 10, 1)
        ),
        var(--background-url);
    --background-background: linear-gradient(
            0deg,
            rgba(10, 10, 10, 1),
            rgba(10, 10, 10, 0.6)
        ),
        var(--background-url) center center fixed;
    --height: 50vh;
}

@media (max-width: 800px) {
    :root {
        --background-image: linear-gradient(
                0deg,
                rgba(10, 10, 10, 1),
                rgba(10, 10, 10, 0)
            ),
            var(--background-url) !important;
    }
}

body {
    margin: 0%;
    padding: 0%;
    width: 100vw;
    background: var(--bg-color);
    color: var(--text-color);
    max-width: 100vw;
    overflow-x: hidden;
    align-items: center;
    font-family: "Poppins", sans-serif;
}

/*blur purpose https://www.w3schools.com/howto/howto_css_blurred_background.asp */

body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

.bg-image {
  /* The image used */
  background-image: url("assets/img/intro-bg.jpg");
  
  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}

/*blur finish*/

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

#profile {
    width: 24vw;
    padding: 4vh 3vw;
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: var(--background-image) center center;
    background-size: cover !important;
    background-repeat: no-repeat;
    position: fixed;
    color: #fff !important;
}

#display {
    width: 64vw;
    padding: 4vh 3vw;
    height: 92vh;
    display: inline-block;
    padding-left: 33vw;
}

#display h1 {
    font-size: 50px;
    color: var(--text-color);
    font-weight: bold;
    font-family: "Questrial", sans-serif;
}

.emoji {
    width: 18px;
    height: 18px;
}

#background_overlay {
    width: 100vw;
    height: 55vh;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
}

#background {
    width: 100vw;
    height: 55vh;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
}

#header {
    width: 63vw;
    text-align: right;
    padding: 3vh 0px;
    position: absolute;
}

#header a {
    color: var(--text-color);
    text-decoration: none;
    margin-left: 4vw;
    font-weight: bold;
}

#footer {
    width: 100%;
    padding: 8vh 0px;
    text-align: center;
}

#footer a {
    color: var(--text-color) !important;
    text-decoration: none;
    font-family: "Questrial", sans-serif;
    font-weight: bold;
}

#profile_img {
    width: 170px;
    height: 170px;
    min-width: 170px;
    min-height: 170px;
    max-width: 170px;
    max-height: 170px;
    border-radius: 50%;
}

#profile div {
    font-weight: bold;
    margin: 1.5vh 0px;
}

#username {
    font-size: 18px;
    font-weight: bold;
}

#username span {
    font-size: 24px;
}

#userbio {
    font-size: 26px;
    font-family: "Questrial", sans-serif;
    width: 100%;
}

#about {
    font-size: 18px;
    font-family: "Questrial", sans-serif;
}

#about a,
#username a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

#about a:hover,
#username a:hover {
    text-decoration: underline;
}

#about span {
    margin: 1vh 0px;
    display: block;
}

#about span i {
    font-size: 16px;
}

#work {
    margin: 2vh 0px;
    padding: 4vh 0px !important;
}

#forks {
    margin: 2vh 0px;
    padding: 4vh 0px !important;
}

.projects {
    margin-left: -15px;
    /* align section w/ heading above */
}

.projects a {
    /* 30px is the gutter size in magic grid */
    width: calc(49% - 30px);
    /* 49% avoids a weird single column on some wide screens */
    display: flex;
    text-decoration: none;
}

.projects section {
    width: 100%;
    padding: 2.5vh 5%;
    margin: 1vh 0px;
    display: inline-block;
    border-radius: 5px;
    color: var(--text-color);
    border: 1px solid rgb(0, 0, 0, 0.08);
    box-shadow: 0px 0px 0px rgb(0, 0, 0, 0);
    transition: 0.4s ease-in-out transform;
}

.projects section:hover {
    cursor: pointer;
    border: 1px solid rgb(0, 0, 0, 0);
    box-shadow: 0px 15px 35px rgb(0, 0, 0, 0.06);
    transform: scale(1.03);
}

.section_title {
    font-size: 24px;
    font-weight: bold;
    margin: 1vh 0px;
    padding: 0px 1px;
    word-wrap: break-word;
}

.about_section {
    font-size: 18px;
    font-family: "Questrial", sans-serif;
    margin: 2vh 0px;
    font-weight: bold;
    word-wrap: break-word;
}

.bottom_section {
    margin: 1vh 0px;
    font-size: 14px;
    word-wrap: break-word;
}

.bottom_section span {
    margin-right: 20px;
    font-weight: bold;
}

.bottom_section span i {
    font-size: 15px;
}

.socials {
    color: #fff;
    text-decoration: none;
    margin: 3vh 0px !important;
}

.socials span {
    display: inline-block !important;
    margin-right: 2vw !important;
    font-weight: normal !important;
}

.socials span a {
    font-weight: normal !important;
}

.go_back {
    position: absolute;
    color: var(--text-color);
    font-size: 26px;
    margin-left: 5vw;
    margin-top: 4vh;
}

::selection {
    color: var(--bg-color);
    background: var(--text-color);
}

@media (max-width: 800px) {
    #profile {
        width: 90vw;
        padding: 48px 5vw;
        height: 60vh;
        text-align: center;
        position: relative;
    }

    #display {
        width: 90vw;
        padding: 4vh 5vw;
        height: auto;
        display: inline-block;
        padding-left: 5vw;
    }

    #profile_img {
        width: 120px;
        height: 120px;
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;
        margin: 0px auto !important;
    }

    #work {
        margin: 0px;
    }

    .projects {
        margin-left: 0;
        /* remove neg margin to align w/ header */
    }

    .projects a {
        width: 100%;
    }

    .projects section {
        width: 88%;
    }

    .go_back {
        position: relative;
        color: var(--text-color);
        font-size: 26px;
        margin-left: 5vw;
        top: 5vh;
    }
}

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: var(--bg-color);
}

::-webkit-scrollbar-thumb {
    background: var(--text-color);
}

#display h1 {
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
}

.projects section {
    background: rgb(20, 20, 20);
}

.links a {
    color: #46d1ff !important;
}

.about_section > span,
#username > span,
#userbio {
    display: block;
}

.bottom_section > span {
    display: inline-block;
}

.subtitle {
    font-size: 20px;
}