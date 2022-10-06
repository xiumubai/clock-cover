

<template>
  <div>
    <div class="color">
      <Navbar />
      <Header />
      <FlipClock />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import FlipClock from "./components/FlipClock.vue";

export default {
  components: { Navbar, Header, FlipClock },
  data() {
    return {};
  },
};
</script>

<style scoped>
.color {
  width: 100%;
  height: 0.5em;
  background: linear-gradient(
    to right,
    hsl(185, 100%, 55%),
    hsl(341, 100%, 55%)
  );
}
</style>
