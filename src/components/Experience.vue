<template>
<div id="wrapper">
  <img id="img_header" src="../assets/Images/transition.svg">
  <div class="section" id="experience">
    <h1>EXPERIENCES</h1>
    <div id="experiences">
      <section class="item" @click="showModal('Inovancy', '<ul><li>Java</li><li>PHP</li><li>JavaScript</li></ul>', '<ul><li>Laravel</li><li>Blade</li><li>NodeJS</li></ul>', '<ul><li>Express</li><li>MySQL</li></ul>', '<ul><li>Administrateur de base de données</li><li>Développement d\'application web</li><li>Développement d\'application Java</li><li>Développement d\'une application WebSocket</li></ul>', 'depuis 2021')">
        <img src="../assets/Images/inovancy.svg">
        <div>
          <p>Inovancy est un projet fondé avec un ami. Ce projet m'a permis d'approfondir mes connaissances en développement web.</p>
          <a>En savoir plus ...</a>
        </div>
      </section>
      <section class="item" @click="showModal('Stage - Assuromieux', '<ul><li>PHP</li><li>JavaScript</li></ul>', '<ul><li>Laravel</li><li>Blade</li></ul>', '<ul><li>MySQL</li></ul>', '<ul><li>Développement d\'un portail web</li><li>Rédaction de compte-rendu</li><li>Relations internationales</li><li>Animation de réunions</li></ul>', 'd\'avril 2023 à juin 2023')">
        <img src="../assets/Images/assuromieux.svg">
        <div>
          <p>ASSUROMIEUX est un cabinet de courtage en assurance. Lors de ce stage j’ai appris l’utilisation de Laravel.</p>
          <a>En savoir plus ...</a>
        </div>
      </section>
      <section class="item" @click="showModal('Alternance - Cegedim', '<ul><li>Java</li><li>JavaScript</li></ul>', '<ul><li>Spring</li><li>AngularJS</li></ul>', '<ul><li>Jiras</li><li>Zoom</li></ul>', '<ul><li>Développement fullstack</li><li>Méthode AGILE</li><li>Relations clients</li><li>Relations internationales</li></ul>', 'de septembre 2023 à juillet 2024')">
        <img src="../assets/Images/cegedim.svg">
        <div>
          <p>Cegedim est un entreprise qui développe des logiciels pour des mutuelles. Durant mon alternance j’ai appris l’angular et spring. </p>
          <a>En savoir plus ...</a>
        </div>
      </section>
    </div>
  </div>
  <img id="img_footer" src="../assets/Images/transition.svg">
</div>

  <Modal
      v-show="isModalVisible"
      @close="closeModal"
      ref="modalComponent">

    <template v-slot:title>
      {{ this.modalTitle }}
    </template>

    <template v-slot:outils>
      <div v-html="modalOutils"></div>
    </template>

    <template v-slot:outilsC2>
      <div v-html="modalOutilsC2"></div>
    </template>

    <template v-slot:outilsC3>
      <div v-html="modalOutilsC3"></div>
    </template>

    <template v-slot:details>
      <div v-html="modalDetails"></div>
    </template>

    <template v-slot:date>
      {{ this.modalDate }}
    </template>
  </Modal>
</template>

<script>
import Modal from '@/modals/ExperienceModal.vue';

export default {
  name: 'ExperienceSection',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "N/A",
      modalOutils: "N/A",
      modalOutilsC2: "N/A",
      modalOutilsC3: "N/A",
      modalDetails: "N/A",
      modalDate: "N/A"
    };
  },
  methods: {
    showModal(title, outils, outilsC2, outilsC3, details, date) {
      this.isModalVisible = true;
      this.modalTitle = title;
      this.modalOutils = outils;
      this.modalOutilsC2 = outilsC2;
      this.modalOutilsC3 = outilsC3
      this.modalDetails = details;
      this.modalDate = date
    },
    closeModal() {
      const modalElement = this.$refs.modalComponent.$refs.modalContent;
      if (modalElement && !modalElement.contains(event.target)) {
        this.isModalVisible = false;
      }
    },
  }

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
  width: 21%;
  text-align: center;
  border-radius: 1vw;
  background-color: #F97167;
  filter: drop-shadow(0 0 0.75rem crimson);
  transition: transform .3s;
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
  transform: scale(1.1);
  cursor: pointer;
}

p{
  text-align: left;
  line-height: 1.8vw;
  padding-right: 2vw;
  padding-left: 2vw;
  font-size: 1.2vw;
  background-color: #F97167;
  height: 12vw;
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