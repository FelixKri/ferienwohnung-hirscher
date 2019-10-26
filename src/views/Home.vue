<template>
  <div>
    <section class="home container">
      <h1 class="heading">FERIENWOHNUNG IN ANNABERG</h1>
    </section>
    <div class="site">
      <div class="container clearfix" style="padding-bottom: 3em;">
        <div class="left-block">
          <h2 style="margin-top: 0; padding-top: 1em;">Die Wohnung</h2>
          <p>Unsere Ferienwohnung verfügt über 45 Quadratemeter auf 3 Räumen, mit eigenem Bad und kleiner Terasse. Alles ist neu eingerichtet . Sie verfügen über einen eigenen Hauseingang und Parkplatz vor dem Haus.
          </p>
          <p>Die Wohnung liegt etwa 3km außerhalb von Annaberg und ist mit einer kurzen Autofahrt erreichbar. Auch ein Bus fährt mehrmals pro Tag, die Station ist jedoch 10 Minuten Gehweg entfernt.   </p>
          <div class="img-block clearfix">
            <img
              src="@/assets/kitchen4.jpg"
              alt="Küche und Essbereich"
              class="half-width left img"
              id="kitchen4"
              @click="expandModal('kitchen4')"
            />
            <img
              src="@/assets/terrasse.jpg"
              alt="Ausblick von der Terrasse"
              class="half-width right img"
              id="terrasse"
              @click="expandModal('terrasse')"
            />
          </div>
          <img
            src="@/assets/beds1.jpg" 
            alt="Das Schlafzimmer"
            class="full-width img" 
            id="beds1" 
            @click="expandModal('beds1')"
          />
          <p>Mehr Infos & Bilder über die Wohnung finden Sie unter <a href="/house">"Die Wohnung"</a>.</p>
          <h2>Skifahren, Snowboarden, Rodeln.</h2>
          <p>
            Unser Skigebiet, Dachtein-West, reicht von Annaberg bis nach Gosau & Rußbach. Skifahren in Dachstein West bietet ein beeindruckendes Bergpanorama, perfekte Pisten, weitestgehende Schneesicherheit, moderne Liftanlagen, urige Hütten und günstige Skitickets. Mit über 160 Pistenkilometern auf 65 verschiedenen Pisten unterschiedlichster Schwierigkeitsgrade haben sogar die erfahrendsten Skifahrer mehrere Tage zu tun. Sollte man sich doch nach mehr Abwechslung sehnen, sind ein Abstecher in die Nahegelegenen Pisten in Abtenau und am Krippenstein zu empfehlen. Hier geht es zur
            <a
              href="https://www.dachstein.at/winter/"
            >offiziellen Website</a> des Dachstein-West Skigebiets.
          </p>
          <img :src="require('@/assets/skiing.jpg')" class="full-width img" alt="Skifahrer"/>
          <h2>Wandern, Radeln, Baden.</h2>
          <p>Mit den zahlreichen Gipfeln, Wanderrouten und Mountainbike-Trails entlang unserer Gebirge, dem Gosaukamm und dem Tennengebirge gehen die Wanderrouten so schnell nicht zur neige. An den Füßen der Gipfel erwarten Sie urige Almhütten und Wiesenplätze zum Entspannen. Im Winter werden die Wanderrouten dann zu Tourenrouten, und man kann die Berge im Glanz des Schnees erkunden.</p>
          <img :src="require('@/assets/hiking.jpg')" alt="Wandern" class="full-width img" />
        </div>
        <div class="right-block">
          <h2 style="text-align: left;">Restaurants & Almhütten</h2>
          <p>Rund um Annaberg verstekcen sich in den Bergen verschiedene kleine bewirtete Almhütten, ideal für eine kurze Pause oder Mahlzeit. Von den Terrassen kann man den Wundervollen Ausblick auf das Tennengebirge und den Gosaukamm bei einer Mahlzeit oder einem Getränk bewundern!</p>
          <a href="/annaberg">
            <div class="button">Unsere Empfehlungen</div>
          </a>
          <h2 style="text-align: left;">Preise & Buchung</h2>
          <p>
            Unsere Preise findest du in der <a href="/pricing">Preise Seite </a> oder direkt auf dem
            <a
              href="https://booking.annaberg-lungoetz.com/tennengauannaberg/de/accommodation/search?"
            >Reservierungsportal von Annaberg</a>
          </p>
          <a href="/pricing">
            <div class="button">Zu den Preisen</div>
          </a>
          <h2 style="text-align: left;">Über Annaberg</h2>
          <p>Ein kleines 1400 Einwohner Dorf im Herzen von Salzburg, umgeben von den wunderschönen Bergen des Tennegebirges und Gosaukamms. Im Salzburger Lammertal ticken die Uhren noch etwas anders. Ursprünglicher. Irgendwie eine ganz andere Welt. Genießen Sie unvergessliche Skitage in der Skiregion Dachstein West oder lassen Sie einfach die Stille der Natur auf sich wirken.</p>
          <a href="/annaberg">
            <div class="button">Mehr Erfahren</div>
          </a>
        </div>
      </div>
    </div>
    <div id="modal" class="modal">

        <!-- The Close Button -->
        <span class="close" @click="closeModal">&times;</span>

        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="modalimg">

        <!-- Modal Caption (Image Text) -->
        <div id="caption"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  methods: {
    expandModal: function(id) {
      // Get the modal
      var modal = document.getElementById("modal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementById(id);
      var modalImg = document.getElementById("modalimg");
      var captionText = document.getElementById("caption");

      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      };
    },
    closeModal: function() {
      var modal = document.getElementById("modal");

      modal.style.display = "none";
    }
  }
};
</script>

<style>
.heading {
  padding-top: 40vh;
  text-align: center;
  font-size: 5em;
  letter-spacing: 0.15em;
  color: white;
}

.home {
  margin-top: -120px;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/house-front.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.site {
  background-color: #f0eee4;
}

.img-block {
  padding: 2em 0;
}

.left-block {
  width: 55%;
  text-align: justify;
  float: left;
}

.right-block {
  width: 40%;
  text-align: justify;
  float: right;
}

.half-width {
  width: 48%;
}

.full-width {
  width: 100%;
}

.left {
  float: left;
  width: 45%;
}

.right {
  float: right;
  width: 45%;
}

@media only screen and (max-width: 850px) {
  .left-block {
    float: none;
    width: 100%;
  }

  .right-block {
    float: none;
    width: 100%;
  }

  .heading {
    font-size: 2.5em;
  }
}
</style>
