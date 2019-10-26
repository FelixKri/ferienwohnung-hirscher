<template>
<div>
    <img :src="require('@/assets/footer.jpg')" alt="" class="footer-img">
    <div class="footer">
        <div class="container">
            <p style="padding-top: 60px; font-size: 2.5em; padding-bottom: 40px; font-family: 'Big Shoulders Display', cursive;">Ferienwohnung Hirscher</p>
            <div class="left">
                <br>
                <p class="small">122/2 Annaberg</p>
                <p class="small">5524 Annaberg Lungötz</p>
                <p class="small">E-Mail: info@example.com</p>
                <p class="small">Telefon: +43 699 / 19292705 </p>
            </div>
            <div class="right">
                <ul style="font-family: 'Big Shoulders Display', cursive; color: white;">
                    <li><a href="/house" style="color: white;">Die Wohnung</a></li>
                    <li><a href="/pricing" style="color: white;">Preise</a></li>
                    <li><a href="/annaberg" style="color: white;">Annaberg</a></li>
                    <li><a href="/contact" style="color: white;">Kontakt</a></li>
                    <li><a href="https://booking.annaberg-lungoetz.com/tennengauannaberg/de/accommodation/list" style="color: white;">BUCHUNG</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        height: 400px;
        width: 100%;
        background-color: #2b2b2b;
        margin-top: -20px;
    }

    .footer p{
        color: white;
        margin: 0;
    }

    .footer-img{
        width: 100%; 
    }

    .small{
        font-size: 0.9em;
        line-height: 2.5em;
    }

    .left{
        float: left;
        width: 50%;
    }

    .right{
        float: right;
        width: 40%;
    }

    ul{
        list-style-type: none;
        line-height: 1.5em;
    }

    @media only screen and (max-width: 850px){
        .small{
            line-height: 1.5em;
            padding: 0;
        }
    }

</style>