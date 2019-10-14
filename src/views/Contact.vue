<template>
  <div class="container">
    <h1 class="header"> Kontakt </h1>
    <hr>
    <p>Bereit zu buchen? Noch offene Fragen? Schreib uns oder ruf uns an! Du kannst die Ferienwohnung jederzeit unter <span style="font-weight: bold;">069919292705</span> oder <span style="font-weight: bold;">test@example.com</span> erreichen!</p>
    <p>Direkt Buchen kannst du auch über das Booking-Portal von Annaberg Lungötz unter <a href="https://booking.annaberg-lungoetz.com/tennengauannaberg/de/accommodation/search?">booking.annaberg-lungoetz.com</a>. Dort findest du auch noch weitere Fotos und Informationen zur Wohnung!</p>
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

</style>