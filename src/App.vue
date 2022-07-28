<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/" class="menu-link">
          <h1>VueMCU</h1>
        </router-link>
      </div>
      <div id="side">
        <router-link to="/about" class="menu-link">
          <div class="menu-item">
            <h2>About</h2>
          </div>
        </router-link>
        <router-link to="/actors" class="menu-link">
          <div class="menu-item">
            <h2>Actors</h2>
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <div id="footer">
      <p>
        github: <a href="https://github.com/taylor-west/vue-lab">vue-lab</a>
      </p>
    </div>
  </div>
</template>

<script></script>

<style>
#app {
  height: 100%;
}
#menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0em 2em;
  background-color: #212121;
  height: 4em;
}
#brand {
  width: 6em;
}
#side {
  display: flex;
  justify-content: space-between;
}
.menu-link {
  color: white;
  text-decoration: none;
  font-family: monospace;
  padding: 1em;
  align-content: center;
}
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2em;
  background-color: #212121;
  color: white;
  justify-content: center;
  display: flex;
  align-items: center;
}
#footer a {
  color: white;
}
@media screen and (max-width: 40em) {
  #menu {
    font-size: 1em;
    border: 3px solid #3030303;
  }
  #footer {
    font-size: 1em;
  }
  .menu-link {
    width: 5em;
  }
}
</style>
