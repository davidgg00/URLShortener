<template>
  <form @submit.prevent="shortenURL">
    <span><i class="fas fa-link"></i></span>
    <input
      type="text"
      id="text"
      v-model="formURL"
      placeholder="Paste a long url"
    />
    <button type="submit">Shorten</button>
  </form>
  <div id="result">
    <span>http://localhost:8000/kuszm4po</span>
    <i class="far fa-copy"></i>
  </div>
</template>

<script>
import { ref } from "vue";
import shortenUrlApi from "../../api/shortenUrlApi";
import "particles.js";
import particleconfig from "../assets/particleconfig.json";
export default {
  mounted() {
    window.particlesJS("particles-js", particleconfig, () => {});
  },
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
#result {
  background: #2c3e50;
  width: 40%;
  margin: 10px auto;
  border-radius: 0px 0px 0px 0px;
  display: flex;
  justify-content: center;
}

#result i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}

#result span {
  display: block;
  padding: 20px;
  font-size: 1.2em;
}

form {
  position: relative;
  display: flex;
  justify-content: center;
}
input {
  display: block;
  min-width: 30%;
  max-width: 50%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border: 0px;
  -webkit-appearance: none;
  transition: border 0.3s ease;
  background: #fff;
  font-size: 1.1em;
}

input::placeholder {
  color: #cbd1dc;
}

input:focus {
  outline: none;
  border-color: #275efe;
}

form span,
button {
  white-space: nowrap;
  text-align: center;
  padding: 8px 12px;
  font-size: 14px;
  line-height: 25px;
  color: #99a3ba;
  background: white;
  border: 1px solid #cdd9ed;
  transition: background 0.3s ease, border 0.3s ease, color 0.3s ease;
  border-radius: 20px 0 0 20px;
  border: 0px;
}
button {
  border-radius: 0px 20px 20px 0px !important;
  border: 1px solid #007eea;
  min-width: 10%;
  max-width: 20%;
  background: #007eea;
  color: white;
  cursor: pointer;
}
</style>
