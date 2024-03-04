<template>
  <div id="wrapper">
    <img class="img_header" src="../assets/Images/transition.svg">
    <div class="section" id="skills">
      <div id="title">
        <h1 class="bold">COMPETENCES</h1>
      </div>
      <div class="content">
        <section class="item link" @click="showModal('Réaliser', 'Concevoir, coder, tester et intégrer une solution informatique pour un client.', '<ul><li>Respecter les besoins décrits par le client</li><li>Appliquer les principes algorithmiques</li><li>Veiller à la qualité du code et à sa documentation</li><li>Choisir les resources techniques appropriées</li></ul>')">
          <h2>REALISER</h2>
          <div>
            <p>Adapter des applications sur différents supports.</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
        <section class="item link" @click="showModal('Optimiser', 'Proposer des applications informatiques optimisées en fonction de critères spécifiques: temps d\'exécution, précision, consommation de ressources, ...', '<ul><li>Formaliser et modéliser des situations complexes</li><li>Recenser les algorithmes et les structures de données usuels</li><li>S\'appuyer sur des schémas de raisonnement</li><li>Assurer la continuité d\'activité</li></ul>')">
          <h2>OPTIMISER</h2>
          <div>
            <p>Analyser et optimiser des applications.</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
        <section class="item link" @click="showModal('Administrer', 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d\'une organisation.', '<ul><li>Sécuriser le système d\'information</li><li>Appliquer les normes en vigueur et les bonnes pratiques architecturales et de sécurité</li><li>Offrir une qualité de service optimale</li><li>Assurer la continuité d\'activité</li></ul>')">
          <h2>Administrer</h2>
          <div>
            <p>Déployer des services dans une architecture réseau.</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
      </div>
      <div class="content">
        <section class="item link" @click="showModal('Gérer', 'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.', '<ul><li>Respecter les réglementations sur le respect de la vie privée et la protection des données personnelles</li><li>S\'appuyer sur les bases mathématiques</li><li>Assurer la cohérence et la qualité</li></ul>')">
          <h2>GERER</h2>
          <div>
            <p>Optimiser une base de données, interagir avec une application et mettre en oeuvre la sécurité.</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
        <section class="item link" @click="showModal('Conduire', 'Satisfaire les besoins des utilisateurs au regard de la chaine de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.', '<ul><li>Adopter une démarche proactive, créative et critique</li><li>Respecter les règles juridiques et les normes en vigueur</li><li>Communiquer efficacement avec les différents acteurs d\'un projet</li><li>Sensibiliser une gestion éthique, responsable, durable et interculturelle</li></ul>')">
          <h2>CONDUIRE</h2>
          <div>
            <p>Appliquer une démarche de suivi de projet en fonction des besoins métiers.</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
        <section class="item link" @click="showModal('Collaborer', 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',  '<ul><li>Inscrire se démarche dans une équipe pluridisciplinaire</li><li>Accompagner la mise en œuvre des évolutions informatiques</li><li>Veiller au respect des contraintes juridiques</li><li>Développer une communication efficace et collaborative</li></ul>')">
          <h2>COLLABORER</h2>
          <div>
            <p>Manager une équipe informatique</p>
            <a>En savoir plus ...</a>
          </div>
        </section>
      </div>
    </div>
    <img class="img_footer" src="../assets/Images/transition.svg">
  </div>

  <Modal
      v-show="isModalVisible"
      @close="closeModal"
      ref="modalComponent">

    <template v-slot:title>
      {{ this.modalTitle }}
    </template>

    <template v-slot:description>
      {{ this.modalDescription }}
    </template>

    <template v-slot:details>
      <div v-html="modalDetails"></div>
    </template>
  </Modal>

</template>

<script>
import Modal from "@/modals/SkillModal";

export default {
  name: 'SkillSection',
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "N/A",
      modalDescription: "N/A",
      modalDetails: "N/A"
    };
  },
  methods: {
    showModal(title, description, details) {
      this.isModalVisible = true;
      this.modalTitle = title;
      this.modalDescription = description
      this.modalDetails = details;
    },
    closeModal() {
      const modalElement = this.$refs.modalComponent.$refs.modalContent;
      if (modalElement && !modalElement.contains(event.target)) {
        this.isModalVisible = false;
      }
    },
  },
}
</script>

<style scoped>
#skills{
  background-color: #C62368;
}

h2 {
  padding: 2vw;
  font-size: 2.5vw;
  background-color: #F97167;
}

img{
  width: 100%;
  background-color: transparent;
}

#wrapper{
  display: flex;
  flex-direction: column;
}

.item{
  width: 21%;
  text-align: center;
  border-radius: 1vw;
  background-color: #F97167;
  filter: drop-shadow(0 0 0.75rem crimson);
  transition: transform .3s;
  margin-top: 5vw;
  margin-bottom: 1vw;
}

.item:first-child {
  margin-left: 1.1vw;
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
  height: 10vw;
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

.content{
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

h1{
  font-size: 6vw;
  background-color: #C62368;
  padding-left: 5vw;
}

@media only screen and (max-width: 991px) {
  .content{
    flex-direction: column;
    margin-left: 0;
    text-align: center;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  h2 {
    padding: 4vw;
    font-size: 5vw;
  }

  .item:last-child{
    margin-right: 0;
  }

  .item:first-child{
    margin-left: 0;
  }

  .item{
    width: 60%;
    border-radius: 2vw;
    min-height: 40vw;
    display: inline-block;
  }

  p{
    line-height: 3.5vw;
    font-size: 3.5vw;
    height: auto;
    padding-top: 5vw;
  }

  a{
    font-size: 3.5vw;
    margin-bottom: 2vw;
    margin-top: 10vw;
  }

  .item img{
    margin: 3vw 3vw 0;
  }
}

</style>