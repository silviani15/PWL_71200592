<template>
  <div class="component11-container" v-bind:class="rootClassName">
    <router-link to="/log-in" class="component11-navlink button">
      {{ button }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Component11',
  props: {
    button: {
      type: String,
      default: 'Masuk',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component11-container {
  display: flex;
  position: relative;
}
.component11-navlink {
  width: 754px;
  height: 113px;
  position: relative;
  font-size: 50px;
  border-color: var(--dl-color-gray-black);
  border-width: 1px;
  border-radius: 5px;
  text-decoration: none;
  background-color: var(--dl-color-primary-300);
}
.component11-root-class-name {
  top: 556px;
  left: 631px;
  position: absolute;
}
</style>
