<template>
  <div class="component10-container">
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="component10-textinput button input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component10',
  props: {
    textinput_placeholder: {
      type: String,
      default: 'username anda...',
    },
  },
}
</script>

<style scoped>
.component10-container {
  display: flex;
  position: relative;
}
.component10-textinput {
  position: relative;
  font-size: 50px;
  box-shadow: 5px 5px 10px 0px #d4d4d4;
  text-align: left;
  border-color: #3e3b3b;
  border-style: solid;
  border-width: 3px;
  border-radius: var(--dl-radius-radius-radius8);
}
</style>
