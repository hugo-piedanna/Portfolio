<template>
<div id="wrapper">
  <img id="img_header" src="../assets/transition.svg">
  <div id="experience">
    <h1>EXPERIENCE</h1>
    <div id="experiences">
      <section class="item">
        <img src="../assets/inovancy.svg">
        <div>
          <p>Inovancy est un projet fondé avec un ami. Ce projet m'a beaucoup appris en développement WEB et d'application.</p>
          <a>En savoir plus ...</a>
        </div>
      </section>
      <section class="item">
        <img src="../assets/assuromieux.svg">
        <div>
          <p>ASSUROMIEUX est un cabinet de courtage en assurance. Lors de ce stage j’ai appris l’utilisation de Laravel.</p>
          <a>En savoir plus ...</a>
        </div>
      </section>
      <section class="item">
        <img src="../assets/cegedim.svg">
        <div>
          <p>Cegedim est un entreprise qui développe des logiciels pour des mutuelles. Durant mon alternance j’ai appris l’angular et spring. </p>
          <a>En savoir plus ...</a>
        </div>
      </section>
    </div>
  </div>
  <img id="img_footer" src="../assets/transition.svg">
</div>
</template>

<script>
export default {
  name: 'ExperienceSection',
}
</script>

<style scoped>
#experience{
  background-color: #C62368;
}

img{
  width: 100%;
  background-color: transparent;
}

#wrapper{
  display: flex;
  flex-direction: column;
}

.item img{
  height: 8vw;
  width: 90%;
}

.item{
  width: 20%;
  text-align: center;
  border-radius: 1vw;
  background-color: #F97167;
  filter: drop-shadow(0 0 0.75rem crimson);
  transition: rotate .3s;
  margin-top: 5vw;
  margin-bottom: 5vw;
}

.item:first-child{
  margin-left: 5vw;
}

.item:last-child{
  margin-right: 5vw;
}

.item:hover{
  transform: rotate(5deg);
}

p{
  text-align: justify;
  line-height: 1.8vw;
  padding-right: 2vw;
  padding-left: 2vw;
  font-size: 1.2vw;
  background-color: #F97167;
  margin-bottom: 5px;
  height: 15vw;
}

a{
  font-size: 1.5vw;
  background-color: #F97167;
  float: left;
  margin-left: 2vw;
  margin-bottom: 2vw;
}

.item div{
  background-color: #F97167;
  border-radius: 1vw;
}

#experiences{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  margin-left: 10vw;
  justify-content: space-between;
  background-color: #C62368;
}

.item:last-child{
  margin-right: 20vw;
}

#img_header{
  margin-top: 5vw;
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

h1{
  font-size: 6vw;
  background-color: #C62368;
  margin-left: 5vw;
}

#img_footer{
  transform: rotate(180deg);
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
  margin-bottom: 5vw;
}

</style>