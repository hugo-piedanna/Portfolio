<template>
<div id="aboutMe">
  <img id="img_header" src="../assets/transition.svg">
  <div>
    <h1 class="bold">A PROPOS</h1>
    <div id="content">
      <div id="image-container">
        <img id="picture" src="../assets/logo.png">
      </div>
      <div id="text-container">
        <p>Je suis étudiant en 3° année de BUT Informatique. Je suis passionné par le développement, la musiques et les activités manuelles. Je souhaite me spécialiser dans le développement WEB. Prochainement étudiant en Mastère afin de devenir Expert en développement WEB. </p>
        <a href="#" id="btn_cv">Mon CV</a>
      </div>
    </div>
  </div>
  <img id="img_footer" src="../assets/transition.svg">
</div>

</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style scoped>

*{
  background-color: #C62368;
}

img{
  background-color: transparent;
}

#aboutMe{
  background-color: #001220;
  display: flex;
  flex-direction: column;
}

#img_header{
  background-color: transparent;
}

h1{
  font-size: 6vw;
}

img{
  width: 100%;
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

#content{
  margin-left: 5vw;
  margin-top: 3vw;
  padding: 1vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#text-container{
  flex: 2;
  margin-right: 5vw;
  text-align: justify;
  line-height: 3vw;
}

#image-container{
  flex: 1;
}

#picture{
  height: 90%;
  width: auto;
}

p{
  margin-bottom: 30px;
}

#btn_cv{
  text-decoration: none;
  padding: 1vw;
  background-color: #F97167;
  border: none;
  border-radius: 1vw;
  position: relative;
}

#img_footer{
  transform: rotate(180deg);
}

</style>