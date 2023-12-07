<template>
  <nav>
    <ul>
      <li><a class="bold" @click="scrollToSection('#aboutMe')">A PROPOS</a></li>
      <li><a class="bold" @click="scrollToSection('#skills')">COMPETENCES</a></li>
      <li><a class="bold" @click="scrollToSection('#experience')">EXPERIENCES</a></li>
      <li><a class="bold" @click="scrollToSection('#career')">PARCOURS</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
  methods: {
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        const topOffset = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: topOffset - 50, // Ajoutez votre marge supérieure ici
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>

nav{
  margin: 5vw;
}

ul{
  list-style-type: none;
}

a:hover{
  color: antiquewhite;
  cursor: default;
}

li{
  display: inline;
  padding-right: 26px;
}

</style>