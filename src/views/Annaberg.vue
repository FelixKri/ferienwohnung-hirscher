<template>
  <div>
    <div class="annaberg container">
      <h1 class="heading">ANNABERG IM LAMMERTAL</h1>
    </div>
    <div class="container fluid">
      <h2>SOMMERURLAUB IN ANNABERG-LUNGÖTZ</h2>
      <h3>BERGSOMMER-GENUSS MIT ALLEN SINNEN IN DER WANDERREGION DACHSTEIN-WEST</h3>
      <p style="text-align: justify;">Wandern in Annaberg-Lungötz über saftige Almwiesen, begleitet von Vogelgezwitscher, dem Plätschern munterer Bächlein und vom prächtigen Panorama des Gosaukammes mit der markanten Bischofsmütze. Und für die Rast bieten Almen und Hütten in der Region ihre selbstgemachten Köstlichkeiten an.</p>
      <img src="@/assets/hiking4.jpg" alt class="img left-img" />
      <h3>Dem Wandergenuss entgegenschweben</h3>
      <p style="text-align: justify;">Hinein in die Wanderschuhe und hinauf auf den Berg! Es erwarten Sie ein fantastisches Panorama, schöne Wanderwege für die ganze Familie, gemütliche Hütten oder sogar ein Gipfelsturm. Jeden Mittwoch und Freitag bringt Sie die Donnerkogelbahn in das Wandergebiet Zwieselalm in Annaberg/Dachstein-West. Gäste aus Annaberg-Lungötz fahren mit ihrer Gästekarte kostenlos.</p>
      <h2>WINTERURLAUB IN ANNABERG-LUNGÖTZ</h2>
      <h3>Skifahren und Snowboarden</h3>
      <img src="@/assets/skiing2.jpg" alt class="img left-img" />
      <p>
        Das Skigebiet Dachstein West beitet über 160 Pistenkilometer auf 60+ Seilbahnen. Von Pisten für Anfängern bis zu steilen Abhängen ist alles dabei. In der Talstation der Donnerkogelbahn befindet sich außerdem eine Skischule, welche Kurse für alle Altersgruppen anbietet. Auch eine Tagesbetreuung für Kinder ist direkt vorhanden. Mehr erfahren können Sie auf der
        <a href="https://www.dachstein.at/winter/">offiziellen Dachstein West Seite</a>. Urige Hütten und moderner Service runden einen perfekten Skitag erst richtig ab. Lassen Sie sich verwöhnen!
      </p>
      <h3>Abseits der Piste</h3>
      <p>Annabergs Langlaufloipen sind perfekt für Enstpannte Touren durch die stille Natur. Auch zum Winterwandern auf geräumten Wegen oder Schneeschuhwandern im tiefen Schnee eigent sich die idyllische Landschaft. Nutzen Sie die Rodelbahn in Lungötz nicht nur tagsüber, auch abends mit Flutlicht ist es ein wunderbares Wintervergnügen.</p>
      <h2>UNSERE EMPFEHLUNGEN</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis id rerum, veritatis animi quod modi ipsa, temporibus necessitatibus corporis voluptatum nihil dolore tempora magnam aut laudantium ullam explicabo! Necessitatibus ratione officiis soluta magnam inventore labore velit totam quas dignissimos voluptatibus quos, eligendi, perspiciatis quae qui sunt saepe exercitationem mollitia provident</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1,h2,h3{
    word-wrap: break-word;
}
h3{
    margin: 1em 0;
}
.left-img {
  max-height: 300px;
  object-fit: cover;
}
.heading {
  padding-top: 40vh;
  text-align: center;
  font-size: 5em;
  letter-spacing: 0.15em;
  color: white;
  margin: 0;
}
.annaberg {
  margin-top: -65px;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/annaberg.jpeg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>