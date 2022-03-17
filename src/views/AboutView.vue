<template>
  <div class="about">
    <div class="page-title">
      <h1>About</h1>
    </div>
    <div class="blurb">
      <p>This website is designed to showcase the use of Vue and VUE CLI to create a Single-Page Application (SPA). By using Vue to control the javascript, each "webpage" is actually just the same index.html homepage, with the contents replaced with various "views". These views are made up of components (combined HTML, CSS, and Javascript files) that are loaded and updated by the Vue Router.</p>
    </div>
    <div class="page-body">
      <div class="section">
        <h2 class="section-title">Home</h2>
        <p class="section-explanation">The homepage for this website allows you to search through movies in the Marvel Cinematic Universe by name. Simply type the title of the movie that you are looking for in the searchbar, and the movie (along with the related MCU Phase and the movie's IMDB rating) will pop up!</p>
      </div>
      <div class="section">
        <h2 class="section-title">Actors</h2>
        <p class="section-explanation">The Actors page is similar to the homepage, in that it lets you search through the movies in the MCU. Where it is different is in how you search. On the Actors page, you type in the name of the actor that you are interested in, and all of the movies in the MCU in which they appear are automatically loaded. It also tells you which other actors are also in those movies!</p>
      </div>
      <div class="section">
        <h2 class="section-title">About</h2>
        <p class="section-explanation">This is the page that you are on right now! While the About page isn't interactive, it explains the reset of the website in case you have any questions.</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    components: {
    }
  }
</script>

<style>
.about{
  text-align: center;
  font-size: 1.2em;
}
  .page-body{
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
  }
  .page-title{
    text-align: center;
    font-size: 1.5em;
  }
  h1{
    padding: 0em;
  }
  .section {
    width: 40%;
    padding: 0em 2em;
    text-align: justify;
  }
  .section-title{
    text-align: center;
  }
  .blurb {
    padding: 0em 3em;
  }
</style>
