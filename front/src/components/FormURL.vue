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
  <transition name="fade">
    <div id="result" :style="error ? 'background:red' : ''" v-if="urlshortened">
      <span ref="urlref">{{ urlshortened }}</span>
      <i
        class="far fa-copy"
        :class="{ copiedStyle: copied }"
        :style="error ? 'display:none' : ''"
        @click="copyShortenURLClipboard"
      ></i>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import shortenUrlApi from "../../api/shortenUrlApi";
import "particles.js";
import particleconfig from "../assets/particleconfig.json";
export default {
  mounted() {
    try {
      window.particlesJS("particles-js", particleconfig, () => {});
    } catch (err) {
      console.log("couldn't load particles background");
    }
  },
  setup() {
    const formURL = ref(null);
    const urlshortened = ref(null);
    const notification = ref(null);
    const copied = ref(false);
    const error = ref(false);
    const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
    async function shortenURL() {
      try {
        error.value = false;
        notification.value = false;
        urlshortened.value = null;
        if (!formURL.value.match(regex)) {
          console.log("entro");
          throw "error";
        }
        const { data } = await shortenUrlApi.post("", {
          longURL: formURL.value,
        });
        urlshortened.value =
          process.env.VUE_APP_API_URL + "/" + data.shortenURLCode;
      } catch (er) {
        error.value = true;
        urlshortened.value = "URL INVALID";
      }
    }

    function copyShortenURLClipboard() {
      navigator.clipboard.writeText(urlshortened.value);
      copied.value = true;
      setTimeout(function () {
        copied.value = false;
      }, 2000);
    }
    return {
      shortenURL,
      formURL,
      urlshortened,
      copyShortenURLClipboard,
      notification,
      copied,
      error,
    };
  },
};
</script>

<style scoped>
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

  #result span{
   padding: 20px 10px 20px 5px;
  }

  form button {
    max-width: 100%;
  }
}
</style>
