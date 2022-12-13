<template>
  <div class="component5-container" v-bind:class="rootClassName">
    <input
      type="text"
      rows="USERNAME TEMAN..."
      :placeholder="textinput_placeholder"
      class="component5-textinput input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component5',
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
.component5-container {
  display: flex;
  position: relative;
}
.component5-textinput {
  width: 1110px;
  height: 76px;
  position: relative;
  font-size: 30px;
  border-color: var(--dl-color-gray-black);
  border-width: 3px;
  border-radius: var(--dl-radius-radius-radius4);
}
.component5-root-class-name {
  left: 543px;
  bottom: 36px;
  position: absolute;
}
.component5-root-class-name1 {
  left: 543px;
  bottom: 36px;
  position: absolute;
}
</style>
