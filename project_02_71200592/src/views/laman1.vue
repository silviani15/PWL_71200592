<template>
  <div class="laman1-container">
    <div class="laman1-container1">
      <router-link to="/" class="laman1-navlink">
        <app-component10 class="laman1-component"></app-component10>
      </router-link>
    </div>
  </div>
</template>

<script>
import AppComponent10 from '../components/component10'

export default {
  name: 'Laman1',
  components: {
    AppComponent10,
  },
  metaInfo: {
    title: 'Laman1 - Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'Laman1 - Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.laman1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  box-shadow: 3px 5px 10px 0px #d4d4d4,5px 5px 10px 0px #d4d4d4;
  min-height: 100vh;
  transition: 0.3s;
  align-items: center;
  border-color: rgba(59, 56, 56, 0.7);
  border-style: solid;
  border-width: 1px;
  flex-direction: column;
  justify-content: center;
}

.laman1-container1 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.laman1-navlink {
  display: contents;
}
.laman1-component {
  text-decoration: none;
}
</style>
