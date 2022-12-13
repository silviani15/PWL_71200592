<template>
  <div class="component3-container" v-bind:class="rootClassName">
    <router-link to="/log-in" class="component3-navlink button">
      {{ button }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Component3',
  props: {
    button: {
      type: String,
      default: 'Button',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component3-container {
  display: flex;
  position: relative;
}
.component3-navlink {
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
</style>
