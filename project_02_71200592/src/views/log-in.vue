<template>
  <div class="log-in-container">
    <textarea id="area1" class="log-in-textarea textarea"></textarea>
    <div class="log-in-container1">
      <span class="log-in-text">Pesan Terakhir</span>
      <router-link to="/laman1" class="log-in-navlink">
        <app-component8
          rootClassName="component8-root-class-name"
          class="log-in-component"
        ></app-component8>
      </router-link>
    </div>
    <span class="log-in-text1">Kirim Pesan Ke:</span>
    <router-link to="/log-in1" class="log-in-navlink1">
      <app-component4
        rootClassName="component4-root-class-name"
        class="log-in-component1"
      ></app-component4>
    </router-link>
  </div>
</template>

<script>
import AppComponent8 from '../components/component8'
import AppComponent4 from '../components/component4'

export default {
  name: 'LogIn',
  components: {
    AppComponent8,
    AppComponent4,
  },
  metaInfo: {
    title: 'LogIn - Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'LogIn - Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.log-in-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.log-in-textarea {
  top: -1px;
  left: -2px;
  width: 503px;
  height: 1003px;
  position: absolute;
  background-color: #3d5cd8;
}
.log-in-container1 {
  top: 57px;
  left: 109px;
  width: 32.546875px;
  height: 18.390625px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.log-in-text {
  top: -36px;
  left: -76px;
  color: var(--dl-color-gray-white);
  width: 3000%;
  height: 100%;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in-navlink {
  display: contents;
}
.log-in-component {
  text-decoration: none;
}
.log-in-text1 {
  left: 14px;
  color: var(--dl-color-gray-white);
  bottom: 115px;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in-navlink1 {
  display: contents;
}
.log-in-component1 {
  text-decoration: none;
}
</style>
