<template>
  <div class="component8-container" v-bind:class="rootClassName">
    <svg viewBox="0 0 896 1024" class="component8-icon">
      <path
        d="M365.714 822.857c0 16 7.429 54.857-18.286 54.857h-182.857c-90.857 0-164.571-73.714-164.571-164.571v-402.286c0-90.857 73.714-164.571 164.571-164.571h182.857c9.714 0 18.286 8.571 18.286 18.286 0 16 7.429 54.857-18.286 54.857h-182.857c-50.286 0-91.429 41.143-91.429 91.429v402.286c0 50.286 41.143 91.429 91.429 91.429h164.571c14.286 0 36.571-2.857 36.571 18.286zM896 512c0 9.714-4 18.857-10.857 25.714l-310.857 310.857c-6.857 6.857-16 10.857-25.714 10.857-20 0-36.571-16.571-36.571-36.571v-164.571h-256c-20 0-36.571-16.571-36.571-36.571v-219.429c0-20 16.571-36.571 36.571-36.571h256v-164.571c0-20 16.571-36.571 36.571-36.571 9.714 0 18.857 4 25.714 10.857l310.857 310.857c6.857 6.857 10.857 16 10.857 25.714z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Component8',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.component8-container {
  display: flex;
  position: relative;
}
.component8-icon {
  fill: #D9D9D9;
  width: 40px;
  height: 40px;
  position: relative;
}
.component8-root-class-name {
  top: -35px;
  right: -346px;
  position: absolute;
}
</style>
