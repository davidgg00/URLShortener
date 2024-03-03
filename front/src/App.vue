<template>

  <div id="app" class="">
    <div class="particles-container">
      <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" :options="particlesOptions" />
    </div>

    <div class="content animate__animated animate__backInDown">
      <header>
        <h2>URL SHORTENER</h2>
        <h3>Simplify your links</h3>
      </header>
      <article>
        <FormURL />
      </article>

    </div>

  </div>
</template>

<script setup lang="ts">
import FormURL from "./components/FormURL.vue";
import { ref } from 'vue';

const particlesLoaded = ref(false);

const particlesOptions = {
  background: {
    color: {
      value: '#0d47a1'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 6,
      straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 5 }
    }
  },
  detectRetina: true
};

</script>

<style>
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
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

.particles-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

article {
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


@media only screen and (max-width: 350px) {
  header {
    margin-top: 100px;
  }
}
</style>
