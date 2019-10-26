<template>
  <div class="container">
    <h1 class="header">Die Wohnung</h1>
    <hr>
    <h2>Schlafzimmer</h2>

    <div class="grid">
      <div>
        <p
          style="margin: 0; text-align: justify"
          class="gridtext"
        >
          Das Schlafzimmer verfügt über ein breites Doppelbett sowie ein Stockbett und ist ideal für kleine reisende Familien. Der Raum ist im Winter beheizt und grenzt direkt an den Hauptraum an. Alle Möbel sind Neuanschaffungen.
        </p>
      </div>
      <figure class="item-1">
        <img
          src="@/assets/bedroom1.jpg"
          alt="Stockbett & Doppelbett"
          class="img"
          id="bedroom1"
          @click="expandModal('bedroom1')"
        />
      </figure>
      <figure class="item-2">
        <img
          src="@/assets/bedroom2.jpg"
          alt="Stockbett"
          class="img"
          id="bedroom2"
          @click="expandModal('bedroom2')"
        />
      </figure>
      <figure class="item-3">
        <img
          src="@/assets/bedroom3.jpg"
          alt="Übersicht Schlafzimmer"
          class="img"
          id="bedroom3"
          @click="expandModal('bedroom3')"
        />
      </figure>
    </div>
    <h2 style="text-align: right;" id="bathheading">Badezimmer</h2>
    <div class="grid">
      <figure
        class="item-1"
        style="grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 3;"
      >
        <img
          src="@/assets/bath2.jpg"
          alt="Das Badezimmer"
          class="img"
          id="bath2"
          @click="expandModal('bath2')"
        />
      </figure>
      <div>
        <p
          style="margin: 0; text-align: justify;"
          class="gridtext"
        >
          Das Bad ist ebenfalls komplett Neu und im Winter beheizt. Es stehen jeden Tag frische Handtücher sowie Badeutensilien wie Shampoo, Seife und Toilettenpapier.
        </p>
      </div>
      <figure class="item-3">
        <img
          id="bath1"
          src="@/assets/bath1.jpg"
          alt="Handtücher"
          class="img"
          @click="expandModal('bath1')"
        />
      </figure>
    </div>
    <h2>Küche & Wohnzimmer</h2>
    <div class="grid">
      <div>
        <p
          style="margin: 0; text-align: justify;"
          class="gridtext"
        >
          Auch die Küche sowie das Wohnzimmer sind komplett neu. Die Küche verfügt über einen Herd, Ofen, Kühlschrank sowie eine Nespresso Kaffeemaschine. Der Fernseher ist sowohl vom Essbereich als auch von der Couch einsehbar und ist Full-HD aufgelöst.
        </p>
      </div>
      <figure class="item-1">
        <img
          src="@/assets/kitchen.jpg"
          alt="Die Küchenzeile"
          class="img"
          id="kitchen"
          @click="expandModal('kitchen')"
        />
      </figure>
      <figure class="item-2">
        <img
          src="@/assets/kitchen2.jpg"
          alt="Das Ess- und Wohnzimmer"
          class="img"
          id="kitchen2"
          @click="expandModal('kitchen2')"
        />
      </figure>
      <figure class="item-3">
        <img
          src="@/assets/kitchen3.jpg"
          alt="Sofa und Tisch"
          class="img"
          id="kitchen3"
          @click="expandModal('kitchen3')"
        />
      </figure>
    </div>
    <!-- The Modal -->
    <div id="modal" class="modal">
      <!-- The Close Button -->
      <span class="close" @click="closeModal">&times;</span>

      <!-- Modal Content (The Image) -->
      <img class="modal-content" id="modalimg" />

      <!-- Modal Caption (Image Text) -->
      <div id="caption"></div>
    </div>
  </div>
</template>

<script>
export default {
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
      var modal = document.getElementByid("modal");

      modal.style.display = "none";
    }
  }
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 300px);
  grid-gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
}

figure {
  margin-block-start: 0;
  margin-block-end: 0em;
  margin-inline-start: 0;
  margin-inline-end: 0;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.left-side {
  float: left;
  width: 50%;
  text-align: justify;
}
.right-side {
  float: right;
  width: 40%;
}

.header {
  font-size: 4em;
  text-align: center;
  margin-bottom: 0;
}
.logo {
  color: black;
}

.logo h1 {
  margin: 0;
  letter-spacing: 0.2em;
}

.nav-list {
  float: right;
  font-family: "Montserrat", sans-serif;
}

.nav-list * {
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 90px;
  text-decoration: none;
  color: black;
}

hr {
  border: 1px black solid;
}

.line {
  margin: 8px 0;
  height: 2px;
  width: 30px;
  background-color: black;
}

@media only screen and (max-width: 850px) {
  .grid {
    display: block;
  }

  .img {
    max-height: 350px;
    object-fit: cover;
  }

  p {
    padding: 2em 0;
  }

  h2 {
    text-align: center;
  }

  #bathheading{
    text-align: center !important;
  }

  .gridtext{
    padding: 1.5em 0;
  }
}
</style>