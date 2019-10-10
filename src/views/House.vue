<template>
<div class="container">
  <h1 class="header"> Die Wohnung </h1>
  <hr>
  <h2>Schlafzimmer</h2>
  
  <div class="grid">
        <div>
            <p style="margin: 0; text-align: justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab sapiente perspiciatis reprehenderit magnam dolorum laudantium iusto quo earum deleniti dolores corrupti aut eum itaque, atque quod saepe praesentium qui illo necessitatibus! Odio, assumenda. Eveniet excepturi, qui necessitatibus est illo rerum dolor quaerat, dignissimos harum velit maiores voluptatem laboriosam fugiat.</p>
        </div>
        <figure class="item-1">
            <img :src="require('@/assets/bedroom1.jpg')" alt="" class="img">
        </figure>
        <figure class="item-2">
            <img :src="require('@/assets/bedroom2.jpg')" alt="" class="img">
        </figure>
        <figure class="item-3">
            <img :src="require('@/assets/bedroom3.jpg')" alt="" class="img">
        </figure>
  </div>
  <h2 style="text-align: right;">Badezimmer</h2>
  <div class="grid">
        <figure class="item-1" style="grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 3;">
            <img :src="require('@/assets/bath2.jpg')" alt="" class="img">
        </figure>
        <div>
            <p style="margin: 0; text-align: justify;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab sapiente perspiciatis reprehenderit magnam dolorum laudantium iusto quo earum deleniti dolores corrupti aut eum itaque, atque quod saepe praesentium qui illo necessitatibus! Odio, assumenda. Eveniet excepturi, qui necessitatibus est illo rerum dolor quaerat, dignissimos harum velit maiores voluptatem laboriosam fugiat.</p>
        </div>
        <figure class="item-3">
            <img :src="require('@/assets/bath1.jpg')" alt="" class="img">
        </figure>
  </div>
  <h2>Küche & Wohnzimmer</h2>
  <div class="grid">
        <div>
            <p style="margin: 0; text-align: justify;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ab sapiente perspiciatis reprehenderit magnam dolorum laudantium iusto quo earum deleniti dolores corrupti aut eum itaque, atque quod saepe praesentium qui illo necessitatibus! Odio, assumenda. Eveniet excepturi, qui necessitatibus est illo rerum dolor quaerat, dignissimos harum velit maiores voluptatem laboriosam fugiat.</p>
        </div>
        <figure class="item-1">
            <img :src="require('@/assets/kitchen.jpg')" alt="" class="img">
        </figure>
        <figure class="item-2">
            <img :src="require('@/assets/kitchen2.jpg')" alt="" class="img">
        </figure>
        <figure class="item-3">
            <img :src="require('@/assets/kitchen3.jpg')" alt="" class="img">
        </figure>
  </div>
</div>
</template>

<script>
    export default {

    }
</script>

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 300px);
        grid-gap: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    figure{
        margin-block-start: 0;
        margin-block-end: 0em;
        margin-inline-start: 0;
        margin-inline-end: 0;
    }

    .img{
        width: 100%;
        height: 100%;
        object-fit: coverM
    }
    .left-side{
        float: left;
        width: 50%;
        text-align: justify;
    }
    .right-side{
        float: right;
        width: 40%; 
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

    hr{
        border: 1px black solid;
    }
</style>