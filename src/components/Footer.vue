<template>
<div>
    <img :src="require('@/assets/footer.jpg')" alt="" class="footer-img">
    <div class="footer">
        <div class="container">
            <p style="padding-top: 60px; font-size: 2.5em; padding-bottom: 40px; font-family: 'Big Shoulders Display', cursive;">Ferienwohnung Hirscher</p>
            <div class="left">
                <p class="small">122/2 Annaberg</p>
                <p class="small">5524 Annaberg Lungötz</p>
                <p class="small">E-Mail: info@example.com</p>
                <p class="small">Telefon: +43 699 / 19292705 </p>
            </div>
            <div class="right">
                <ul style="font-family: 'Big Shoulders Display', cursive; color: white;">
                    <li>Über uns</li>
                    <li>Die Wohnung</li>
                    <li>Preise</li>
                    <li>Annaberg</li>
                    <li>Kontakt</li>
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
        height: 350px;
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

</style>