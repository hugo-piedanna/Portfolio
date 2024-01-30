<template>
  <div id="wrapper">
    <img id="img_header" src="../assets/Images/transition.svg">
    <div class="section" id="aboutMe">
      <div id="title">
        <h1 class="bold">A PROPOS</h1>
      </div>
      <div id="content">
        <div id="image-container">
          <img id="picture" src="../assets/Images/avatar.jpeg">
        </div>
        <div id="text-container">
          <p>Je suis étudiant en 3° année de BUT Informatique. Je suis passionné par le développement, la musiques, les activités manuelles et les parcs d'attractions. Je souhaite me spécialiser dans le développement WEB. Prochainement étudiant en Mastère afin de devenir Expert en développement WEB. Actuellement à la recherche d'une alternance de 2 ans.</p>
          <a href="./CV_Hugo_Piedanna.pdf" id="btn_cv" download>Mon CV</a>
        </div>
      </div>
    </div>
    <img id="img_footer" src="../assets/Images/transition.svg">
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
  width: 100%;
}

#wrapper{
  display: flex;
  flex-direction: column;
  background-color: #001220;
}

#img_header{
  background-color: transparent;
  margin-top: 5vw;
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

h1{
  font-size: 6vw;
  margin-left: 5vw;
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
  line-height: 3vw;
  padding: 1vw;
}

#image-container{
  flex: 1;
}

#picture{
  height: auto;
  width: 90%;
  border-radius: 50%;
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
  margin-bottom: 5vw;
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

</style>