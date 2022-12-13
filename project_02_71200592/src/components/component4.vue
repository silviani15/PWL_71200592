<template>
  <div class="component4-container" v-bind:class="rootClassName">
    <input
      type="text"
      rows="USERNAME TEMAN..."
      :placeholder="textinput_placeholder"
      class="component4-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component4',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'username teman...',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component4-container {
  display: flex;
  position: relative;
}
.component4-textinput {
  width: 468px;
  height: 70px;
  position: relative;
  font-size: 30px;
  border-radius: var(--dl-radius-radius-radius8);
}
.component4-root-class-name {
  left: 13px;
  bottom: 33px;
  position: absolute;
}
</style>
