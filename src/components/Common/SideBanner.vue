<template>
  <div class="col-12 col-md-6 text-bg-primary d-flex align-items-center justify-content-center">
    <div class="col-10 col-xl-8 py-3">
      <img class="img-fluid rounded mb-4" loading="lazy" :src="imgSrc" width="100" height="80" :alt="altText" />
      <h2 class="h1 mb-4">{{ title }}</h2>
      <p class="lead m-0">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '/src/assets/images/logo.png',
    },
    altText: {
      type: String,
      default: 'Digital Wallet',
    },
    title: {
      type: String,
      default: 'Your digital wallet, always ready.',
    },
    description: {
      type: String,
      default: 'Experience the future of banking with our innovative platform designed to simplify your financial life.',
    },
  },
};
</script>

<style scoped>
/* You can add any specific styles if needed here */
</style>
