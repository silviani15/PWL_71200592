<template>
  <div class="component12-container" v-bind:class="rootClassName">
    <input
      type="text"
      rows="USERNAME TEMAN..."
      :placeholder="textinput_placeholder"
      class="component12-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component12',
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
.component12-container {
  display: flex;
  position: relative;
}
.component12-textinput {
  width: 468px;
  height: 70px;
  position: relative;
  font-size: 30px;
  border-radius: var(--dl-radius-radius-radius8);
}
.component12-root-class-name {
  left: 18px;
  bottom: 39px;
  position: absolute;
}
.component12-root-class-name1 {
  left: 18px;
  bottom: 39px;
  position: absolute;
}
</style>
