<template>
  <div class="about">
    <h1>This is an about page</h1>
    <MovieList/>
  </div>
</template>

<script>
  import MovieList from '@/components/MovieList.vue'

  export default {
    name: 'about',
    components: {
      MovieList
    }
  }
</script>
