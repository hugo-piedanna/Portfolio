<template>
  <div id="wrapper">
    <img id="img_header" src="../assets/Images/transition.svg">
    <div id="footer">
      <div id="name">
        <h1>Hugo PIEDANNA</h1>
      </div>
      <div id="infos">
        <div>
          <a id="mail" href="mailto:h.piedanna@gmail.com">h.piedanna@gmail.com</a>
        </div>
        <div id="links">
          <p><a target="_blank" href="https://github.com/hugo-piedanna">Github</a> - <a target="_blank" href="https://www.linkedin.com/in/hugo-piedanna-a80570246/">Linkedln</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection"
}
</script>

<style scoped>

*{
  background-color: #C62368;
}

img{
  background-color: transparent;
  width: 100%;
  margin-top: 5vw;
  filter: drop-shadow(0 -6mm 0.75rem #C62368);
}

#footer{
  background-color: #C62368;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

#wrapper{
  display: flex;
  flex-direction: column;
  background-color: #001220;
}

h1{
  font-size: 3vw;
  margin-left: 5vw;
  margin-bottom: 3vw;
  padding: 1vw;
}

#mail{
  margin-right: 5vw;
}

#links{
  margin-top: 1vw;
  margin-bottom: 2vw;
}

a{
  text-decoration: none;
}

</style>