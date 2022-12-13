<template>
  <div class="component6-container" v-bind:class="rootClassName">
    <button class="component6-button button">{{ button }}</button>
  </div>
</template>

<script>
export default {
  name: 'Component6',
  props: {
    button: {
      type: String,
      default: 'Kirim',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component6-container {
  display: flex;
  position: relative;
}
.component6-button {
  width: 216px;
  height: 66px;
  position: relative;
  border-radius: var(--dl-radius-radius-radius8);
  padding-right: 38px;
  padding-bottom: var(--dl-space-space-oneandhalfunits);
  background-color: rgb(61, 92, 216);
}
</style>
