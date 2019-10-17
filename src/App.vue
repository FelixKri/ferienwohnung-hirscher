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
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Lora|Montserrat&display=swap');

.img:hover{
  opacity: 0.7;
  transition: 0.3s;
  cursor: pointer;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

.modal-content, #caption { 
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

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

h3{
  font-family: 'Big Shoulders Display', cursive;
  font-size: 1.4em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: black;
  margin-top: 0;
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
