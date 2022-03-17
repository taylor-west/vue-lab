<template>
  <div class="home">
    <div class="marvel-splash">
      <img id="marvel_img" alt="Marvel Studios logo" src="../../public/images/marvel_logo_2.svg" >
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
    <ActorList :movies="movies" />
  </div>
</template>

<script>
import ActorList from "../components/ActorList.vue";
export default {
  name: "Actor",
  components: {
    ActorList,
  },
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    movies() {
      return this.$root.$data.movies.filter(elem1 => elem1.cast.filter(elem2 => elem2.toLowerCase().search(this.searchText.toLowerCase()) >= 0).length > 0);
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
    color: black;
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
