<template>
  <div id="particles-js"></div>
  <header>
    <h2>URL SHORTENER</h2>
    <h3>Simplify your links</h3>
  </header>
  <article>
    <FormURL />
  </article>
</template>

<script>
import FormURL from "./components/FormURL.vue";

export default {
  name: "App",
  components: {
    FormURL,
  },
};
</script>

<style>
header {
  margin-top: 200px;
}

h2 {
  font-size: 2.3em;
  font-weight: 700;
  margin-bottom: 0;
}

h3 {
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 3px;
}

body {
  background: #002553;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

#particles-js {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  width: 100%;
}

article {
  position: absolute;
  z-index: 2;
  width: 100%;
}
</style>
