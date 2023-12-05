<template>
<div id="experience">
  <img id="img_header" src="../assets/transition.svg">
  <div id="content">
    <h1>EXPERIENCE</h1>
    <div id="experiences">
      <section class="item">
        <img src="../assets/inovancy.svg">
        <div>
          <p>Inovancy est une structure. Ce projet m’a permis de développer mes compétences en WEB et en application.</p>
          <a>En savoir plus ...</a>
        </div>
      </section>
      <section class="item">
        <img src="../assets/assuromieux.svg">
        <div>
          <p>ASSUROMIEUX est un cabinet de courtage en assurance. Lors de ce stage j’ai appris l’utilisation de Laravel</p>
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
#content{
  background-color: #C62368;
}

img{
  width: 100%;
  background-color: transparent;
}

#experience{
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
  margin: 1vw;
  border-radius: 1vw;
  background-color: #F97167;
}

p{
  text-align: justify;
  padding-right: 2vw;
  padding-left: 2vw;
  font-size: 1.5vw;
  background-color: #F97167;
  margin-bottom: 5px;
  height: 13vw;
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
  margin-bottom: 5vw;
  background-color: #C62368;
}

#img_footer{
  transform: rotate(180deg);
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

</style>