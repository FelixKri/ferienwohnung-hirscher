<template>
  <div class="container">
    <h1 class="header"> Kontakt </h1>
    <hr>
    <p>Bereit zu buchen? Noch offene Fragen? Schreib uns oder ruf uns an! Du kannst die Ferienwohnung jederzeit unter <span style="font-weight: bold;">069919292705</span> oder <span style="font-weight: bold;">test@example.com</span> erreichen!</p>
    <p>Direkt Buchen kannst du auch über das Booking-Portal von Annaberg Lungötz unter <a href="https://booking.annaberg-lungoetz.com/tennengauannaberg/de/accommodation/search?">booking.annaberg-lungoetz.com</a>. Dort findest du auch noch weitere Fotos und Informationen zur Wohnung!</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d906.5047554826592!2d13.42329735596006!3d47.541837270651264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4776cbef9cc77b6d%3A0x24b5df240dc35395!2sAnnaberg%20122%2C%205524%20Annaberg%20im%20Lammertal!5e1!3m2!1sde!2sat!4v1571917999876!5m2!1sde!2sat" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    <br><br><br>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    hr{
        border: 1px black solid;
    }

    p{
        margin: 2em auto;
        width: 60%;
    }

    .header{
        font-size: 4em;
        text-align: center;
        margin-bottom: 0;
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

    @media only screen and (max-width: 850px){
        p{
            width: 90%;
        }
    }
</style>