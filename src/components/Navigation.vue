<template>
  <nav>
    <ul>
      <li><a class="bold">A PROPOS</a></li>
      <li><a class="bold">PARCOURS</a></li>
      <li><a class="bold">EXPERIENCES</a></li>
      <li><a class="bold">COMPETENCES</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationMenu',
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