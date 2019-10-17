<template>
  <div>
    <section class="home container">
      <h1 class="heading"> FERIENWOHNUNG IN ANNABERG </h1>
    </section>
    <div class="site">
      <div class="container clearfix" style="padding-bottom: 3em;">
        <div class="left-block">
          <h2 style="margin-top: 0; padding-top: 1em;">Die Wohnung</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore illo asperiores culpa eum assumenda laboriosam voluptatem iure deleniti dolorem, cumque nesciunt facere doloremque similique commodi odit modi impedit dolor ut!</p>
          <div class="img-block clearfix">
            <img :src="require('@/assets/kitchen4.jpg')" alt="" class="half-width left">
            <img :src="require('@/assets/terrasse.jpg')" alt="" class="half-width right">
          </div>
          <img :src="require('@/assets/beds1.jpg')" alt="" class="full-width img">
          <p>Mehr Infos & Bilder über die Wohnung finden Sie unter "Die Wohnung".</p>
          <h2>Skifahren, Snowboarden, Rodeln.</h2>
          <p>Unser Skigebiet, Dachtein-West, reicht von Annaberg bis nach Gosau & Rußbach. Skifahren in Dachstein West bietet ein beeindruckendes Bergpanorama, perfekte Pisten, weitestgehende Schneesicherheit, moderne Liftanlagen, urige Hütten und günstige Skitickets. Mit über 160 Pistenkilometern auf 65 verschiedenen Pisten unterschiedlichster Schwierigkeitsgrade haben sogar die erfahrendsten Skifahrer mehrere Tage zu tun. Sollte man sich doch nach mehr Abwechslung sehnen, sind ein Abstecher in die Nahegelegenen Pisten in Abtenau und am Krippenstein zu empfehlen. Hier geht es zur <a href="/">offiziellen Website</a> des Dachstein-West Skigebiets.</p>
          <img :src="require('@/assets/skiing.jpg')" alt="" class="full-width img">
          <h2>Wandern, Radeln, Baden.</h2>
          <p>Mit den zahlreichen Gipfeln, Wanderrouten und Mountainbike-Trails entlang unserer Gebirge, dem Gosaukamm und dem Tennengebirge gehen die Wanderrouten so schnell nicht zur neige. An den Füßen der Gipfel erwarten Sie urige Almhütten und Wiesenplätze zum Entspannen. Im Winter werden die Wanderrouten dann zu Tourenrouten, und man kann die Berge im Glanz des Schnees erkunden.</p>
          <img :src="require('@/assets/hiking.jpg')" alt="" class="full-width img">
        </div>
        <div class="right-block">
          <h2 style="text-align: left;">Restaurants & Almhütten</h2>
          <p>Rund um Annaberg verstekcen sich in den Bergen verschiedene kleine bewirtete Almhütten, ideal für eine kurze Pause oder Mahlzeit. Von den Terrassen kann man den Wundervollen Ausblick auf das Tennengebirge und den Gosaukamm bei einer Mahlzeit oder einem Getränk bewundern!</p>
          <a href="#">
            <div class="button">
              Unsere Empfehlungen
            </div>
          </a>
          <h2 style="text-align: left;">Preise & Buchung</h2>
          <p>Unsere Preise findest du in der Preise Seite oder direkt auf dem <a href="https://booking.annaberg-lungoetz.com/tennengauannaberg/de/accommodation/search?">Reservierungsportal von Annaberg</a></p>
          <a href="/pricing">
            <div class="button">
              Zu den Preisen
            </div>
          </a>
          <h2 style="text-align: left;">Über Annaberg</h2>
          <p>Ein kleines 1400 Einwohner Dorf im Herzen von Salzburg, umgeben von den wunderschönen Bergen des Tennegebirges und Gosaukamms. Im Salzburger Lammertal ticken die Uhren noch etwas anders. Ursprünglicher. Irgendwie eine ganz andere Welt. Genießen Sie unvergessliche Skitage in der Skiregion Dachstein West oder lassen Sie einfach die Stille der Natur auf sich wirken.</p>
          <a href="#">
            <div class="button">
              Mehr Erfahren
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  }
}
</script>

<style>
  .heading{
    padding-top: 40vh;
    text-align: center;
    font-size: 5em;
    letter-spacing: 0.15em;
    color: white;
  }

  .home{
    margin-top: -120px;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/house-front.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }

  .site{
    background-color: #f0eee4;
  }

  .img-block{
    padding: 2em 0;
  }

  .left-block{
    width: 55%;
    text-align: justify;
    float: left;
  }

  .right-block{
    width: 40%;
    text-align: justify;
    float: right;
  }

  .half-width{
    width: 48%;
  }

  .full-width{
    width: 100%;
  }

  .left{
    float: left;
    width: 45%;
  }

  .right{
    float: right;
    width: 45%;
  }

  @media only screen and (max-width: 850px){
    .left-block{
      float: none;
      width: 100%;
    }

    .right-block{
      float: none;
      width: 100%;
    }

    .heading{
      font-size: 2.5em;
    }
  }  
</style>
