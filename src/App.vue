<template>
  <Navigation />
  <Home />
  <AboutMe />
  <Career />
  <Experience />
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Home from '@/components/Home.vue'
import AboutMe from "@/components/AboutMe.vue"
import Career from "@/components/Career.vue";
import Experience from "@/components/Experience.vue";

export default {
  name: 'App',
  components: {
    AboutMe,
    Navigation,
    Home,
    Career,
    Experience
  }
}
</script>

<style>
@font-face {
  font-family: "Codec Pro Bold";
  src: url('./fonts/codec-pro/CodecPro-News.otf');
}

@font-face {
  font-family: "Codec Pro";
  src: url('./fonts/codec-pro/CodecPro-Light.otf');
}

*{
  font-family: "Codec Pro", Avenir, Helvetica, Arial, sans-serif;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #001220;
  margin: 0;
  padding: 0;
  font-size: 2vw;
}

.bold{
  font-family: "Codec Pro Bold", "Codec Pro", Avenir, Helvetica, Arial, sans-serif;
}
</style>
