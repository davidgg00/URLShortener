<template>
  <header>
    <h3>URL SHORTENER</h3>
  </header>
  <article>
    <div id="explication">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quo
      debitis dolores quae, quas inventore earum neque, libero quia nihil
      eligendi nam? Facere dicta rerum ullam veniam libero consequuntur
      incidunt?
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
