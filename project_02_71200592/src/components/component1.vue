<template>
  <div class="component1-container" v-bind:class="rootClassName">
    <input
      type="text"
      name="adi"
      value="adi"
      :placeholder="textinput_placeholder"
      autocomplete="adi"
      class="component1-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component1',
  props: {
    rootClassName: String,
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
  },
}
</script>

<style scoped>
.component1-container {
  display: flex;
  position: relative;
}
.component1-textinput {
  position: relative;
}
</style>
