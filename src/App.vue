<template>
  <header>
    <Navigation />
  </header>
  <main>
    <AboutMe />
    <SkillHow />
    <Skills />
    <Experience />
    <Career />
    <button v-show="showScrollButton" @click="scrollToTop" class="scroll-top-btn">
      <font-awesome-icon :icon="arrowUpIcon" class="arrow-up" />
    </button>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SkillHow from '@/components/Skills.vue'
import AboutMe from "@/components/AboutMe.vue"
import Career from "@/components/Career.vue";
import Experience from "@/components/Experience.vue";
import Skills from "@/components/SkillHow.vue";
import Footer from "@/components/Footer.vue";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'App',
  data() {
    return {
      showScrollButton: false,
      arrowUpIcon: faArrowUp
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Appel initial pour vérifier la position au chargement
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const whenShowButton = 200;

      this.showScrollButton = scrollPosition > whenShowButton;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  components: {
    AboutMe,
    Navigation,
    SkillHow,
    Career,
    Experience,
    Skills,
    Footer,
    FontAwesomeIcon
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

body{
  min-height: 100dvh;
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
  overflow-x: hidden;
  min-width: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}

.bold{
  font-family: "Codec Pro Bold", "Codec Pro", Avenir, Helvetica, Arial, sans-serif;
}

#modal * {
  background-color: #C62368;
}

#outils ul {
  padding-left: 1vw;
}

#modal li {
  background-color: transparent;
  padding: 0.5vw;
  list-style: inside;
  font-size: 1.6vw;
  font-weight: 300;
}

.link {
  cursor: pointer;
}

#modal ul {
  background-color: #C62368;
}

.scroll-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  padding: 1vw;
  height: 4vw;
  width: 4vw;
  overflow: hidden;
  border: hidden;
  border-radius: 50%;
  opacity: 0.5;
  filter: drop-shadow(0 0 0.75rem black);
  transition: transform 0.3s;
}

.scroll-top-btn:hover{
  transform: scale(1.1);
}

.img_header{
  background-color: transparent;
  margin-top: 5vw;
  filter: drop-shadow(0 -.7em 0.75rem #C62368);
}

.img_footer{
  transform: rotate(180deg);
  margin-bottom: 5vw;
  filter: drop-shadow(0 -.7em 0.75rem #C62368);
}

@media only screen and (max-width: 991px) {
  .scroll-top-btn {
    padding: 1vw;
    height: 10vw;
    width: 10vw;
  }

  .arrow-up {
    font-size: 3vw;
  }

  #outils ul {
    padding-left: 3vw;
  }

  #details ul {
    padding-left: 3vw;
  }

  #modal li {
    padding: 1vw;
    list-style: inside;
    font-size: 4vw;
    font-weight: 300;
  }
}
</style>
