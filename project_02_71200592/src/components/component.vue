<template>
  <div class="component-container" v-bind:class="rootClassName">
    <form
      action="john"
      method="john"
      target="john"
      enctype="text/plain"
      autocomplete="username"
      class="component-form"
    ></form>
    <router-link to="/log-in" class="component-navlink button">
      {{ button }}
    </router-link>
    <input
      type="text"
      value="username"
      :placeholder="textinput_placeholder"
      autocomplete="username"
      class="component-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    rootClassName: String,
    button: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style scoped>
.component-container {
  display: flex;
  position: relative;
}
.component-form {
  top: -61px;
  left: -169px;
  width: 271px;
  height: 63px;
  display: flex;
  position: absolute;
  background-color: var(--dl-color-primary-700);
}
.component-navlink {
  top: 15px;
  left: -140px;
  width: 208px;
  position: absolute;
  text-decoration: none;
  background-color: var(--dl-color-primary-300);
}
.component-textinput {
  top: -41px;
  left: -148px;
  position: absolute;
}
</style>
