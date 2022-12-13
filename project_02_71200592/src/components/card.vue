<template>
  <section class="card-card" v-bind:class="rootClassName">
    <div class="card-icon">
      <img :alt="IconAlt" :src="Icon" class="card-icon1" />
    </div>
    <main class="card-content">
      <h1 class="card-header">{{ Header }}</h1>
      <p class="card-description">{{ Description }}</p>
    </main>
  </section>
</template>

<script>
export default {
  name: 'Card',
  props: {
    Description: {
      type: String,
      default:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    },
    rootClassName: String,
    Icon: {
      type: String,
      default: '/playground_assets/group%201316-200w.png',
    },
    IconAlt: {
      type: String,
      default: 'image',
    },
    Header: {
      type: String,
      default: 'Sima Mosbacher',
    },
  },
}
</script>

<style scoped>
.card-card {
  gap: var(--dl-space-space-oneandhalfunits);
  flex: 1;
  display: flex;
  padding: var(--dl-space-space-threeunits);
  position: relative;
  align-items: flex-start;
  border-radius: 20px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #292929;
}
.card-icon {
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  aspect-ratio: 1;
  border-radius: 50%;
  flex-direction: column;
  justify-content: center;
  background-color: #80FF44;
}
.card-icon1 {
  height: 30px;
  object-fit: cover;
}
.card-content {
  gap: var(--dl-space-space-halfunit);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.card-header {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  line-height: 36px;
}
.card-description {
  color: #C2C6CC;
  font-family: Poppins;
  line-height: 28px;
}



@media(max-width: 991px) {
  .card-root-class-name {
    flex: 0 0 auto;
    width: 100%;
  }
  .card-root-class-name1 {
    flex: 0 0 auto;
    width: 100%;
  }
  .card-root-class-name2 {
    flex: 0 0 auto;
    width: 100%;
  }
}
</style>
