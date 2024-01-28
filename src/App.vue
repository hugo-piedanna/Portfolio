<template>
  <header>
    <Navigation />
  </header>
  <main>
    <Home />
    <AboutMe />
    <Skills />
    <Experience />
    <Career />
    <button v-show="showScrollButton" @click="scrollToTop" class="scroll-top-btn">
      <font-awesome-icon :icon="arrowUpIcon" />
    </button>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Home from '@/components/Home.vue'
import AboutMe from "@/components/AboutMe.vue"
import Career from "@/components/Career.vue";
import Experience from "@/components/Experience.vue";
import Skills from "@/components/Skills.vue";
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
    Home,
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
}

.bold{
  font-family: "Codec Pro Bold", "Codec Pro", Avenir, Helvetica, Arial, sans-serif;
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
</style>
