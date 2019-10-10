<template>
    <div id="nav">
        <div class="container-nav clearfix">
            <div class="logo">
                <a href="/" style="color: inherit; font-size: 2.5em;"> Haus Hirscher </a>
            </div>
            <div class="nav-list">
                <a href="/about">ÜBER UNS</a>
                <a href="/house">DIE WOHNUNG</a>
                <a href="/pricing">PREISE</a>
                <a href="/annaberg">ANNABERG</a>
                <a href="/contact">KONTAKT</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
</style>