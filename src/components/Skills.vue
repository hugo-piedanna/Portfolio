<template>
  <div class="section" id="skills">
    <h1 class="bold">COMPETENCES</h1>
    <div id="allSkills">
      <div id="hardSkills">
        <p class="title">Hard Skills</p>
        <ul>
          <li class="subTitle bold">Langage / Architecture</li>
          <li>PHP</li>
          <li>HTML / CSS</li>
          <li>JavaScript</li>
          <li>NodeJs</li>
          <li>Java</li>
          <li>API (REST/SOAP)</li>
          <li class="subTitle bold">Framework / librairies</li>
          <li>Laravel</li>
          <li>Vue</li>
          <li>Angular</li>
          <li>Express</li>
          <li>JQuery</li>
          <li>Ajax</li>
          <li>Spring</li>
          <li>Socket.io / WebSocket</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li class="subTitle bold">Base de données / ORM</li>
          <li>SQL</li>
          <li>Neo4J</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Hibernate</li>
          <li>Eloquent</li>
        </ul>
      </div>
      <div id="softSkills">
        <p class="title">Soft Skills</p>
        <ul>
          <li class="subTitle bold">Outils</li>
          <li>GitHub</li>
          <li>Jiras</li>
          <li>Trello</li>
          <li class="subTitle bold">Méthodes</li>
          <li>Scrum</li>
          <li>Kanban</li>
          <li class="subTitle bold">Personnalité</li>
          <li>Esprit d'équipe</li>
          <li>Curiosité</li>
          <li>Analyse</li>
          <li>Perspicacité</li>
        </ul>
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
  margin: 5vw 5vw 5vw 20vw;
}

#hardSkills{
  flex: 1;
}

#softSkills{
  flex: 1;
}

.title{
  font-size: 4vw;
}

.subTitle{
  padding-top: 2vw;
  font-size: 2.1vw;
  list-style: none;
}

li{
  padding: 0.5vw;
  list-style: inside;
}

</style>