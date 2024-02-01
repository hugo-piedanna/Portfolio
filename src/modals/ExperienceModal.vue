<template>
  <section id="container" @click="$emit('close')">
    <button  @click="$emit('close')" aria-label="close" class="x">❌</button>
    <section id="modal" ref="modalContent">
      <h2><slot name="title"></slot> <span id="date">(<slot name="date"></slot>)</span></h2>
      <div id="body">
        <div id="outils">
          <slot class="outils" name="outils"></slot>
          <slot class="outils" name="outilsC2"></slot>
          <slot class="outils" name="outilsC3"></slot>
        </div>
        <div id="details">
          <slot name="details"></slot>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ExperienceModal'
}
</script>

<style scoped>

#body {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
}

#outils{
  width: 50%;
  padding: 1rem;
  font-weight: 300;
  border-right: 3px solid white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#details {
  width: 50%;
  padding: 1rem 0 1rem 0.5rem;
}

*{
  background-color: #C62368;
}

#date {
  font-size: 1rem;
  background-color: transparent;
}

#container {
  z-index: 300;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 18, 32, 0.5);
  backdrop-filter: blur(1rem);
}

.x {
  filter: grayscale(1);
  border: none;
  background: none;
  position: absolute;
  top: 15px;
  right: 10px;
  transition: ease filter, transform 0.3s;
  cursor: pointer;
  transform-origin: center;
  &:hover {
    filter: grayscale(0);
    transform: scale(1.1);
  }
}

#modal {
  background-color: #C62368;
  min-width: 80%;
  min-height: 50dvh;
  padding: 1vw;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 5px 30px 0 rgb(0 0 0 / 10%);
  animation: fadeIn 1s ease both;
  &::backdrop {
    animation: fadeIn 1s ease both;
    background: rgb(255 255 255 / 40%);
    z-index: 2;
    backdrop-filter: blur(20px);
  }
  h2 {
    font-weight: 600;
    font-size: 2rem;
    padding: 1rem;
    background-color: transparent;
  }
  p {
    background-color: transparent;
    font-size: 1rem;
    line-height: 1.3rem;
    padding: 0.5rem 0;
    a {
      &:visited {
        color: rgb(29 92 255);
      }
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>