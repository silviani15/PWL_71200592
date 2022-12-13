<template>
  <div class="component2-container" v-bind:class="rootClassName">
    <input
      type="text"
      :placeholder="textinput_placeholder"
      class="component2-textinput button input"
    />
  </div>
</template>

<script>
export default {
  name: 'Component2',
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
.component2-container {
  display: flex;
  position: relative;
}
.component2-textinput {
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
