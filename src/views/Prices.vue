<template>
    <div class="container">
        <h1 class="header">Preise</h1>
        <hr>
        <h2>Im Winter</h2>
        <div class="block clearfix">
            <div class="left">
                <p>Die Miete pro Nacht im Winter beträgt 95-115€ pro Nacht inklusive Ortstaxe. Für die Reinigung fallen einmalig 40€ an.</p>
                <p>Haustiere sind leider nicht willkommen, außerdem darf im Haus darf nicht geraucht werden.</p>
            </div>
            <div class="right img-prices-div">
                <img src="@/assets/winter.jpg" class="img-prices" alt="">
            </div>
        </div>
        <h2 id="right">Im Sommer</h2>
        <div class="left img-prices-div">
            <img src="@/assets/sommer.jpg" alt="" class="img-prices">
        </div>
        <div class="right">
            <p>Die Miete pro Nacht im Winter beträgt 95-115€ pro Nacht inklusive Ortstaxe. Für die Reinigung fallen einmalig 40€ an.</p>
            <p>Haustiere sind leider nicht willkommen, außerdem darf im Haus darf nicht geraucht werden.</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

    .img-prices{
        width: 100%; max-height: 300px; object-fit: cover;
        object-position: 0% 30%;
    }
    .header{
        font-size: 4em;
        text-align: center;
        margin-bottom: 0;
    }

    hr{
        border: 1px black solid;
    }
    .logo{
        color: black;
    }

    .logo h1{
        margin: 0;
        letter-spacing: 0.2em;
    }

    .nav-list{
        float: right;
        font-family: 'Montserrat', sans-serif;
    }

    .nav-list * {
        margin-left: 1em;
        margin-right: 1em;
        margin-top: 90px;
        text-decoration: none;
        color: black;
    }

    .line{
        margin: 8px 0;
        height: 2px;
        width: 30px;
        background-color: black;
    }

    #right{
        text-align: right;
    }
    @media only screen and (max-width: 850px) {
        .left {
            float: none;
            width: 100%;
        }

        .right {
            float: none;
            width: 100%;
        }

        #right{
            text-align: center;
        }

        .img-prices{
            height: 150px;
            width: 80% !important;
        }

        .img-prices-div{
            text-align: center;
        }
    }
</style>