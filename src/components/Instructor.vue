<template>
  <div class="page-header">
    <b-row>
      <b-col lg="12" md="8" sm="4">
        <h2 class="d-inline">CSE 230</h2>
        <b-button variant="success" size="lg" class="float-right">
          Instructor: {{ instructorName }}
        </b-button>
        <!-- <button v-if="studentBuffer"   type="button" class="btn btn-info    btn-lg float-right">Student</button> -->
      </b-col>
    </b-row>
  </div>
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
