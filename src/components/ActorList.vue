<template>
  <div class="wrapper">
    <div class="movies">
      <div v-for="movie in movies" :key="movie.id" class="movie">
        <div class="image">
        <!--  <img :src="'/images/' + movie.image"> -->
        </div>
        <div class="name">
          <h1>{{ movie.name }}</h1>
        </div>
        <div class="info">
          <h2>Cast</h2>
          <ul class="cast-list">
            <li v-for="item in movie.cast" :key=item.length>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActorList",
  props: {
    movies: Array,
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.movies {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.movie {
  margin: 0.5em;
  margin-top: 1em;
  width: 12em;
  border: 1.5px solid white;
  color: white;
}

.movie img {
  border: 2px solid #333;
  height: 15em;
  width: 12em;
  object-fit: cover;
}

.movie .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.name{
    text-align: center;
    opacity: 1;
    color: white;
}
.info {
  padding: 10px 30px;
  height: 80px;
  font-size: 3em;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 0.5em;
}


.phase {
  display: flex;
}
.cast-list{
  font-size: 0.3em;
  list-style: initial;
  width: 100%;
  padding-left: 0em;
}
button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
