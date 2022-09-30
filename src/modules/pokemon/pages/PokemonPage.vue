<template>
  <div v-if="pokemon">
    <h1>Pokemon: {{ id }}</h1>

    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    // const { id } = this.$route.params;
    // console.log(id);
    // this.id = id;

    // Obtenemos el pokemon
    this.getPokemon();
  },
  watch: {
    id() {
      this.getPokemon();
    },
  },
  methods: {
    async getPokemon() {
      try {
        const raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.pokemon = await raw.json();
      } catch (error) {
        this.$router.push("/");
        console.log("Crashed");
      }
    },
  },
};
</script>

<style>
</style>