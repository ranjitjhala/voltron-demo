<template>
  <h1>Yo Student {{ studentName }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Student extends Vue {
  name = "Student";

  get studentName() {
    return this.$store.getters.currentUser.name;
  }
}
</script>
