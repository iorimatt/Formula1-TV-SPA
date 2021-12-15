<template>
  <div>
    <h1 class="text-white text-center m-5">{{ errorMessage }}</h1>
  </div>
</template>
<script>
export default {
  name: "Timeout",
  data() {
    return {
      errorMessage: this.$store.state.error,
    };
  },
};
</script>
<style>
</style>