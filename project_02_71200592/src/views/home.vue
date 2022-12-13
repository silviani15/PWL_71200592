<template>
  <div class="home-container">
    <div class="home-container1">
      <form
        action="john"
        method="john"
        target="john"
        enctype="text/plain"
        autocomplete="username"
        class="home-form"
      ></form>
      <div class="home-container2"></div>
      <input
        type="text"
        value="username"
        placeholder="username"
        autocomplete="username"
        class="home-textinput input"
      />
    </div>
    <div class="home-container3"></div>
    <router-link to="/log-in" class="home-navlink">
      <app-component11
        rootClassName="component11-root-class-name"
        class="home-component"
      ></app-component11>
    </router-link>
    <input
      type="text"
      placeholder="placeholder"
      class="home-textinput1 button input"
    />
  </div>
</template>

<script>
import AppComponent11 from '../components/component11'

export default {
  name: 'Home',
  components: {
    AppComponent11,
  },
  metaInfo: {
    title: 'Planical modern template',
    meta: [
      {
        property: 'og:title',
        content: 'Planical modern template',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.home-container1 {
  display: flex;
  position: relative;
}
.home-form {
  top: -61px;
  left: -169px;
  width: 271px;
  height: 63px;
  display: flex;
  position: absolute;
  background-color: var(--dl-color-primary-700);
}
.home-container2 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.home-textinput {
  top: -41px;
  left: -148px;
  position: absolute;
}
.home-container3 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  display: flex;
  position: relative;
}
.home-navlink {
  display: contents;
}
.home-component {
  text-decoration: none;
}
.home-textinput1 {
  top: 414px;
  left: 627px;
  position: absolute;
  font-size: 50px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: left;
  border-color: #3e3b3b;
  border-style: solid;
  border-width: 3px;
  border-radius: var(--dl-radius-radius-radius8);
}
</style>
