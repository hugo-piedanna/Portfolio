<template>
  <nav>
    <ul>
      <li><a class="bold nav_link active" id="btn_home" @click="scrollToSection('#home')">HOME</a></li>
      <li><a class="bold nav_link" id="btn_aboutMe" @click="scrollToSection('#aboutMe')">A PROPOS</a></li>
      <li><a class="bold nav_link" id="btn_skills" @click="scrollToSection('#skills')">COMPETENCES</a></li>
      <li><a class="bold nav_link" id="btn_experience" @click="scrollToSection('#experience')">EXPERIENCES</a></li>
      <li><a class="bold nav_link" id="btn_career" @click="scrollToSection('#career')">PARCOURS</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.navLinks = document.querySelectorAll('.nav_link');
    this.sections = document.querySelectorAll('.section');
  },
  data() {
    return {
      navLinks: [],
      sections: [],
      currentSection: "home"
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        const topOffset = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topOffset - 130,
          behavior: 'smooth'
        });
      }
    },
    handleScroll(){
      this.sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200) {
          this.currentSection = section.id;
        }
      });

      this.navLinks.forEach(navLink => {
        if(navLink.id === 'btn_'+this.currentSection){
          document.querySelector('.active').classList.remove('active');
          navLink.classList.add('active');
        }
      });
    }
  }
}
</script>

<style scoped>

nav{
  padding: 3vw 3vw 3vw 5vw;
  position: fixed;
  width: 100%;
  z-index: 200;
}

.active{
  color: #F97167;
}

ul{
  list-style-type: none;
}

a:hover{
  color: #F97167;
  cursor: default;
}

li{
  display: inline;
  padding-right: 26px;
}

</style>