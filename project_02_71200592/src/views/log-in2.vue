<template>
  <div class="log-in2-container">
    <textarea id="area1" class="log-in2-textarea textarea"></textarea>
    <div class="log-in2-container1">
      <span class="log-in2-text">Pesan Terakhir</span>
      <router-link to="/laman1" class="log-in2-navlink">
        <svg viewBox="0 0 896 1024" class="log-in2-icon">
          <path
            d="M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"
          ></path>
        </svg>
      </router-link>
    </div>
    <span class="log-in2-text1">Kirim Pesan Ke:</span>
    <app-component12
      rootClassName="component12-root-class-name1"
    ></app-component12>
    <app-component5 rootClassName="component5-root-class-name1"></app-component5>
    <textarea class="log-in2-textarea1 textarea"></textarea>
    <router-link to="/log-in3" class="log-in2-navlink1 button">Kirim</router-link>
  </div>
</template>

<script>
import AppComponent12 from '../components/component12'
import AppComponent5 from '../components/component5'

export default {
  name: 'LogIn2',
  components: {
    AppComponent12,
    AppComponent5,
  },
  metaInfo: {
    title: 'LogIn2 - Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'LogIn2 - Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.log-in2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.log-in2-textarea {
  top: -1px;
  left: -2px;
  width: 503px;
  height: 1003px;
  position: absolute;
  background-color: #3d5cd8;
}
.log-in2-container1 {
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
.log-in2-text {
  top: -36px;
  left: -80px;
  color: var(--dl-color-gray-white);
  width: 3000%;
  height: 100%;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in2-navlink {
  display: contents;
}
.log-in2-icon {
  top: -35px;
  fill: #D9D9D9;
  right: -346px;
  width: 40px;
  height: 40px;
  position: absolute;
  text-decoration: none;
}
.log-in2-text1 {
  left: 23px;
  color: var(--dl-color-gray-white);
  bottom: 126px;
  position: absolute;
  font-size: 35px;
  font-family: Fira Sans;
}
.log-in2-textarea1 {
  top: 1px;
  left: 501px;
  width: 1419px;
  height: 109px;
  position: absolute;
  background-color: #7570da;
}
.log-in2-navlink1 {
  right: 20px;
  width: 216px;
  bottom: 31px;
  height: 57px;
  padding: 38px;
  position: absolute;
  font-size: 30px;
  text-align: center;
  padding-top: 38px;
  border-radius: var(--dl-radius-radius-radius8);
  padding-bottom: var(--dl-space-space-threeunits);
  text-decoration: none;
  background-color: rgb(61, 92, 216);
}
</style>
