<template>
  <h1>About Page</h1>
  <hr />
  <h2>{{ name }}</h2>
  <button @click="handleChangeName">Change name</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Javier",
    };
  },
  methods: {
    handleChangeName() {
      console.log("Cambiando ando");
      this.name = "Melissa";
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  render() {
    console.log("render");
  },
};
</script>

<style>
</style>