<template>
  <div class="section" id="skills">
    <h1 class="bold">COMPETENCES</h1>
    <div id="allSkills">
      <div id="hardSkills">
        <p class="title">Hard Skills</p>
        <div class="cards">
          <div class="card">
            <h3 class="title_card">BDD / ORM</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>SQL</li>
                <li>Neo4J</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Hibernate</li>
                <li>Hibernate</li>
              </ul>
            </div>
          </div>
          <div class="card h-20">
            <h3 class="title_card">Framework / Librairies</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>Laravel</li>
                <li>Vue JS</li>
                <li>Angular JS</li>
                <li>Express</li>
                <li>JQuery</li>
                <li>Ajax</li>
                <li>Spring</li>
                <li>Socket.io / WebSocket</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <h3 class="title_card">Langage / Architecture</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>PHP</li>
                <li>HTML / CSS</li>
                <li>JavaScript</li>
                <li>NodeJs</li>
                <li>Java</li>
                <li>API (REST/SOAP)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="softSkills">
        <p class="title">Soft Skills</p>
        <div class="cards">
          <div class="card">
            <h3 class="title_card">Outils</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>GitHub</li>
                <li>Jiras</li>
                <li>Trello</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <h3 class="title_card">Méthodes</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>Scrum</li>
                <li>Kanban</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <h3 class="title_card">Personnalité</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div class="body_card">
              <ul>
                <li>Esprit d'équipe</li>
                <li>Curiosité</li>
                <li>Analyse</li>
                <li>Perspicacité</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsSection'
}
</script>

<style scoped>

#skills{
  margin-top: 5vw;
}

h1{
  font-size: 6vw;
  margin-left: 5vw;
}

#allSkills{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5vw 5vw 5vw 10vw;
}

#hardSkills{
  flex: 1;
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#softSkills{
  flex: 1;
}

.title{
  font-size: 4vw;
}

.card {
  margin: 5vw;
  display: flex;
  height: 20vw;
  width: 33%;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 1.2rem #000;
  transition: transform 0.4s;
  position: relative;
  overflow: hidden;
}

.card:not(:first-child) {
  margin-left: -15vw;
}

.h-20:hover{
  height: 30vw;
}

.card:hover {
  transform: translateY(-2vw);
  transition: translate 2s;
}

.card:hover ~ .card {
  position: relative;
  transform: translateX(10vw);
}

.title_card {
  color: white;
  font-weight: 300;
  position: absolute;
  left: 1.5vw;
  top: 1vw;
  background-color: #17141d;
}

.bar {
  position: absolute;
  top: 5vw;
  left: 1.5vw;
  height: 0.4vw;
  width: 10.5vw;
}

.emptybar {
  background-color: #2e3033;
  width: 100%;
  height: 100%;
}

.filledbar {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 0;
  height: 100%;
  background: rgb(198,35,104);
  background: linear-gradient(90deg, rgba(220,20,60,1) 0%, rgba(198,35,104,1) 65%, rgba(249,113,103,1) 100%);
  transition: 0.4s ease-out;
}

.card:hover .filledbar {
  width: 70%;
  transition: 0.4s ease-out;
}

.body_card {
  position: absolute;
  top: 7vw;
  margin-left: 2vw;
}

.card:hover {
  transition: 0.6s ease-out;
}

li {
  padding: 0.5vw;
  list-style: inside;
  background-color: #17141d;
  font-weight: 200;
  font-size: 1.2vw;
}

</style>