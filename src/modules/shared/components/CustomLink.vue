<template>
  <a v-if="isExternalLink" class="normal-link" :href="link.to" target="_blank">
    {{ link.name }}
  </a>
  <router-link v-else :to="route" v-slot="{ href, isActive }">
    <a :class="isActive ? 'is-active' : 'normal-link'" :href="href">
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith("http");
    },
    route() {
      return this.link.id
        ? { name: this.link.to, params: { id: this.link.id } }
        : { name: this.link.to };
    },
  },
};
</script>

<style scoped>
.is-active {
  color: #42b983;
}

.normal-link {
  color: #c6c5c5;
}
</style>