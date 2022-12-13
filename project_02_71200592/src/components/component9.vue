<template>
  <div class="component9-container" v-bind:class="rootClassName">
    <input
      type="text"
      rows="USERNAME TEMAN..."
      :placeholder="textinput_placeholder"
      class="component9-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component9',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'ketik pesan...',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.component9-container {
  display: flex;
  position: relative;
}
.component9-textinput {
  width: 1110px;
  height: 76px;
  position: relative;
  font-size: 30px;
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: var(--dl-radius-radius-radius4);
}
.component9-root-class-name {
  left: 543px;
  bottom: 36px;
  position: absolute;
}
</style>
