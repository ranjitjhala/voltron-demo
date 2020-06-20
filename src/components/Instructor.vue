<template>
  <h1>Hello Instructor: {{ instructorName }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Instructor extends Vue {
  name = "Instructor";

  get instructorName() {
    return this.$store.getters.currentUser.name;
  }
}
</script>
