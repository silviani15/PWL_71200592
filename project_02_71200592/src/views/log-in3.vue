<template>
  <div class="log-in3-container">
    <textarea id="area1" class="log-in3-textarea textarea"></textarea>
    <div class="log-in3-container1">
      <span class="log-in3-text">Pesan Terakhir</span>
      <router-link to="/laman1" class="log-in3-navlink">
        <app-component7
          rootClassName="component7-root-class-name"
          class="log-in3-component"
        ></app-component7>
      </router-link>
    </div>
    <span class="log-in3-text1">Kirim Pesan Ke:</span>
    <input
      type="text"
      rows="USERNAME TEMAN..."
      placeholder="username teman..."
      class="log-in3-textinput input"
    />
    <input
      type="text"
      rows="USERNAME TEMAN..."
      placeholder="iki pesannya"
      class="log-in3-textinput1 input"
    />
    <app-component9 rootClassName="component9-root-class-name"></app-component9>
    <textarea class="log-in3-textarea1 textarea"></textarea>
    <button class="log-in3-button button">Kirim</button>
  </div>
</template>

<script>
import AppComponent7 from '../components/component7'
import AppComponent9 from '../components/component9'

export default {
  name: 'LogIn3',
  components: {
    AppComponent7,
    AppComponent9,
  },
  metaInfo: {
    title: 'LogIn3 - Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'LogIn3 - Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.log-in3-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.log-in3-textarea {
  top: -1px;
  left: -2px;
  width: 503px;
  height: 1003px;
  position: absolute;
  background-color: #3d5cd8;
}
.log-in3-container1 {
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
.log-in3-text {
  top: -36px;
  left: -80px;
  color: var(--dl-color-gray-white);
  width: 3000%;
  height: 100%;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in3-navlink {
  display: contents;
}
.log-in3-component {
  text-decoration: none;
}
.log-in3-text1 {
  left: 23px;
  color: var(--dl-color-gray-white);
  bottom: 126px;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in3-textinput {
  left: 18px;
  width: 468px;
  bottom: 39px;
  height: 70px;
  position: absolute;
  font-size: 30px;
  border-radius: var(--dl-radius-radius-radius8);
}
.log-in3-textinput1 {
  top: 160px;
  right: 68px;
  width: 406px;
  height: 84px;
  position: absolute;
  font-size: 30px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius8);
  background-color: #7570da;
}
.log-in3-textarea1 {
  top: 1px;
  left: 501px;
  width: 1419px;
  height: 109px;
  position: absolute;
  background-color: #7570da;
}
.log-in3-button {
  right: 35px;
  width: 216px;
  bottom: 32px;
  height: 57px;
  padding: 38px;
  position: absolute;
  font-size: 30px;
  text-align: center;
  padding-top: 38px;
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: var(--dl-space-space-threeunits);
  background-color: rgb(61, 92, 216);
}
</style>
