<template>
  <div class="home">
    <div class="marvel-splash">
      <img id="marvel_img" alt="Marvel Studios logo" src="../../images/marvel_logo_2.svg" >
    </div>
    <div>
      <div class="wrapper">
        <div class="search">
          <form class="pure-form">
            <i class="fas fa-search"></i><input v-model="searchText" />
          </form>
        </div>
      </div>
    </div>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
export default {
  name: "Home",
  components: {
    MovieList,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    movies() {
      try {
        return this.$root.$data.movies.filter(
          (movie) =>
            movie.name.toLowerCase().search(this.searchText.toLowerCase()) >=
            0
        );
      } catch {
        return [];
      }
    },
  },
};
</script>

<style>
  .home{
    background-color: #212121;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  }
  #marvel_img{
    width: 50%;
    opacity: 0.5;
  }
  .marvel-splash{
    height: 10em;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1em;
  }
  i.fas.fa-search{
    display: none;
  }
  form{
    padding: 2em 1em;
    display: flex;
    justify-content: center;
  }
  input{
    width: 75%;
  }
  @media screen and (max-width: 40em) {
    #marvel_img{
      width: 75%;
    }
  }
  form{
    padding: 0em 0em;
  }
</style>
