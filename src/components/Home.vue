<template>
  <section id="container">
    <div class="left">
      <h1 class="bold">Hugo PIEDANNA</h1>
    </div>
    <div class="right">
      <video controls>
        <source src="../assets/CV_Video.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
}
</script>

<style scoped>

#container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vw;
  margin-bottom: 8vw;
}

.left,
.right {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

video{
  width: 70%;
}

h1{
  font-size: 7vw;
  line-height: 10vw;
  margin-left: 5vw;
}
</style>