<template>
  <div class="section" id="career">
    <h1 class="bold">Parcours</h1>

    <div class="timeline">
      <section class="timeline-item">
        <a class="timeline-item-details">
          <time datetime="2023" class="timeline-item-details-year">2020</time>
          <div class="timeline-item-details-marker"></div>
          <div class="timeline-item-details-desc">
            <p>BAC STI2D Systèmes d'information et numérique</p>
          </div>
        </a>
      </section>
      <section class="timeline-item">
        <a class="timeline-item-details">
          <time datetime="2023" class="timeline-item-details-year">2021</time>
          <div class="timeline-item-details-marker"></div>
          <div class="timeline-item-details-desc">
            <p>Création d’Inovancy</p>
          </div>
        </a>
      </section>
      <section class="timeline-item">
        <a class="timeline-item-details">
          <time datetime="2023" class="timeline-item-details-year">2023</time>
          <div class="timeline-item-details-marker"></div>
          <div class="timeline-item-details-desc">
            <p>Stage chez ASSUROMIEUX</p>
          </div>
        </a>
      </section>
      <section class="timeline-item">
        <a class="timeline-item-details">
          <time datetime="2023" class="timeline-item-details-year">2023</time>
          <div class="timeline-item-details-marker"></div>
          <div class="timeline-item-details-desc">
            <p>Optention du BUT Informatique</p>
          </div>
        </a>
      </section>
      <section class="timeline-item">
        <a class="timeline-item-details">
          <time datetime="2023" class="timeline-item-details-year">2023</time>
          <div class="timeline-item-details-marker"></div>
          <div class="timeline-item-details-desc">
            <p>Alternance chez CEGEDIM </p>
          </div>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLine'
}
</script>

<style scoped>

#career{
  margin-top: 5vw;
}

h1{
  font-size: 6vw;
  margin-left: 5vw;
}

.timeline{
  margin-top: 5vw;
  position: relative;
  overflow-y: hidden;
}

.timeline-item:before{
  content: '';
  position: absolute;
  background-color: #FFF;
  width: 3px;
  height: 100%;
  left: 19.5%;
}

.timeline-item{
  margin: 0 5vw;
  border: 1px solid transparent;
}

.timeline-item-details{
  display: flex;
  margin-bottom: 64px;
  width: 100%;
  height: 4vw;
  padding-top: 1vw;
  overflow-y: hidden;
}

.timeline-item:first-child .timeline-item-details{
  margin-top: 64px;
}

.timeline-item-details-year{
  color: #FFF;
  font-size: 1.3em;
  width: 15%;
}

.timeline-item-details-year .timeline-item-details-desc .timeline-item-details-marker{
  float: left;
}

.timeline-item-details-marker{
  position: relative;
  z-index: 10;
  border-radius: 50%;
  background-color: #001220;
  width: 2vw;
  height: 2vw;
  border: 3px solid #FFF;
  left: -3px;
  transition: transform .3s, background-color .3s;
}

.timeline-item-details:hover .timeline-item-details-marker{
  transform: scale(1.2);
  background-color: #FFF;
}

.timeline-item-details-desc{
  width: 70%;
  float: right;
  margin-left: 10vw;
}

</style>