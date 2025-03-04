<template>
  <form @submit.prevent="shortenURL">
    <span><i class="fas fa-link"></i></span>
    <input type="text" id="text" v-model="formURL" placeholder="Paste a long url" />
    <button type="submit">Shorten</button>
  </form>
  <img src="../assets/loading.gif" width="50" :style="{ display: loading ? 'block' : 'none' }" />
  <transition name="fade">
    <div id="result" :style="{ background: error ? 'red' : '' }" v-if="urlShortened">
      <span ref="urlRef">{{ urlShortened }}</span>
      <i class="far fa-copy" :class="{ copiedStyle: copied }" :style="{ display: error ? 'none' : '' }"
        @click="copyShortenedURLClipboard"></i>
    </div>
  </transition>
</template>

<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css'
import { ref } from "vue";
import shortenUrlApi from "../api/shortenUrlApi";

const formURL = ref<string>("");
const urlShortened = ref<string | null>(null);
const copied = ref(false);
const error = ref(false);
const loading = ref(false);

const expression =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const regex = new RegExp(expression);

interface ShortenUrlResponse {
  shortenURLCode: string; // Assuming this is the property containing the shortened URL
}

async function shortenURL() {
  try {
    loading.value = true;
    error.value = false;
    urlShortened.value = null;
    if (!formURL.value.match(regex)) {
      throw "error";
    }
    const { data } = await shortenUrlApi.post<ShortenUrlResponse>("", {
      longURL: formURL.value,
    });
    console.log(import.meta.env.VITE_BASE_URL);
    urlShortened.value = import.meta.env.VITE_BASE_URL + "/" + data.shortenURLCode;
  } catch (err) {
    console.log(err);
    error.value = true;
    loading.value = false;
    urlShortened.value = "URL INVALID";
  } finally {
    loading.value = false;
  }
}

function copyShortenedURLClipboard() {
  console.log('lanzo!');
  navigator.clipboard.writeText(urlShortened.value || "");
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
}
</script>


<style scoped>
img {
  margin: 0 auto;
}

i {
  cursor: pointer;
  transition: all 0.5s ease-in;
}

.copiedStyle {
  transition: all 0.1s ease-in;
  color: green;
}

#result {
  background: #2c3e50;
  width: 40%;
  margin: 10px auto;
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
}

#result i {
  display: flex;
  justify-content: center;
  align-items: center;
}

#result span {
  display: block;
  padding: 20px;
  font-size: 1.2em;
}

form {
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
form button {
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

form button {
  border-radius: 0px 20px 20px 0px !important;
  border: 1px solid #007eea;
  min-width: 10%;
  max-width: 20%;
  background: #007eea;
  color: white;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 800px) {
  #result {
    width: 60%;
  }
}

@media only screen and (max-width: 500px) {
  #result {
    width: 90%;
  }
}

@media only screen and (max-width: 350px) {
  header {
    margin-top: 100px;
  }

  #result span {
    padding: 20px 10px 20px 5px;
  }

  form button {
    max-width: 100%;
  }
}
</style>
