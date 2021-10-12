<template>
  <form @submit.prevent="shortenURL">
    <input type="text" id="text" v-model="formURL" />
    <button type="submit">Shorten</button>
  </form>
</template>

<script>
import { ref } from "vue";
import shortenUrlApi from "../../api/shortenUrlApi";
export default {
  setup() {
    console.log(process.env.VUE_APP_API_URL);
    const formURL = ref(null);
    async function shortenURL() {
      console.log(formURL.value);
      const { data } = await shortenUrlApi.post("", {
        longURL: formURL.value,
      });

      formURL.value = process.env.VUE_APP_API_URL + "/" + data.shortenURLCode;
    }
    return { shortenURL, formURL };
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
