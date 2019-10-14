<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default{
  name: 'app',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Lora|Montserrat&display=swap');

a{
  color: black;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
    
.container{
  width: 80%;
  margin: 0 auto;
}

h1{
  font-family: 'Big Shoulders Display', cursive;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

h2{
  font-family: 'Big Shoulders Display', cursive;
  font-size: 2.8em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

p{
  font-size: 1.2em;
  line-height: 1.5em;
  color: gray;
  font-family: 'Lora', serif;
}

.button{
  border: 3px solid black;
  width: 98.5%;
  text-align: center;
  padding: 1em 0em;
  font-size: 1.4em;
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  font-family: 'Big Shoulders Display', cursive;
  letter-spacing: 0.2em;
}

a{
  text-decoration: none;
}
</style>
