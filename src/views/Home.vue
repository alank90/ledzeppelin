<template>
  <div class="home">
    <img src="../assets/img/Tudor_Rose.svg" alt="Tudor rose" />
    <h1>The Tudors</h1>

    <h2>A History of the House of Tudor (1485-1603)</h2>
    <masonry />
  </div>
</template>

<script>
// @ is an alias to /src
import masonry from "@/components/masonry.vue";

export default {
  name: "Home",
  components: {
    masonry
  }
};
</script>

<style scoped>
h1 {
  font-family: "Cinzel Decorative", Helvetica;
  font-size: 3.4rem;
  margin: 5px auto;
  text-align: center;
}

h2 {
  font-family: "Cinzel Decorative", Helvetica;
  margin: 5px auto 10px;
  text-align: center;
}

img {
  float: left;
  width: 75px;
}
</style>
