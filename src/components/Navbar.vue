<template>
    <div id="nav">
        <div class="container-nav clearfix">
            <div class="logo">
                <a href="/" style="color: inherit; font-size: 2.5em;"> Haus Hirscher </a>
            </div>
            <div class="nav-list">
                <a href="/house">DIE WOHNUNG</a>
                <a href="/pricing">PREISE</a>
                <a href="/annaberg">ANNABERG</a>
                <a href="/contact">KONTAKT</a>
            </div>
            <div class="hamburger" @click="expandNav()">
                <div class="line" id="p1"></div>
                <div class="line" id="p2"></div>
                <div class="line" id="p3"></div>
            </div>
            <div class="nav-overlay" id="overlay">
                <span class="x-icon" @click="minimizeNav()">X</span>
                <ul class="overlay-list">
                    <li><a href="/house">DIE WOHNUNG</a></li>
                    <li><a href="/pricing">PREISE</a></li>
                    <li><a href="/annaberg">ANNABERG</a></li>
                    <li><a href="/contact">KONTAKT</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        expandNav: function () {
            document.getElementById("overlay").style.display = "block";
            document.getElementById("overlay").style.transform = "translateX(0)";
            
        },
        minimizeNav: function(){
            document.getElementById("overlay").style.display = "none";
            document.getElementById("overlay").style.transform = "translateX(-100vw)";
        }
    }
}
</script>

<style>
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }

    .container-nav{
        padding-top: 20px;
        margin: 0 auto;
        width: 90%;
    }

    .nav{
        padding-top: 100px;
    }

    .logo{
        font-family: 'Big Shoulders Display', cursive;
        float: left;
        color: white;
    }

    .logo h1{
        margin: 0;
        letter-spacing: 0.2em;
    }

    .nav-list{
        padding-top: 15px;
        float: right;
        font-family: 'Montserrat', sans-serif;
    }

    .nav-list * {
        margin-left: 1em;
        margin-right: 1em;
        color: black;
        margin-top: 90px;
        text-decoration: none;
        color: white;
    }

    .nav-overlay{
        position: absolute;
        height: 110vh;
        width: 110vw;
        background-color: #2B2D2F;
        display: none;
        transform: translateX(-100vw);
        font-family: 'Montserrat', sans-serif;
        margin-left: -10vw;
        margin-top: -10vh;
    }

    .overlay-list{
        list-style-type: none;
        margin-top: 20vh;
        margin-left: 10vw;
    }
    .overlay-list li{
        margin: 1em 0;
        color: white;
    }

    .overlay-list > li > a {
        color: white;
    }
    .x-icon{
        color: white;
        font-size: 2em;
        position: absolute;
        top: 100px;
        right: 100px;
        cursor: pointer;
    }
    .hamburger{
        display: none;
        position: absolute;
        right: 50px;
        top: 15px;
    }
    .line{
        margin: 8px 0;
        height: 2px;
        width: 30px;
        background-color: white;
    }

    @media only screen and (max-width: 850px){
        .hamburger{
            display: block;
            cursor: pointer;
        }
        .nav-list{
            display: none;
        }
    }    
</style>