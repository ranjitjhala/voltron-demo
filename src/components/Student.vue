<template>
  <div id="studentview">
    <div class="page-header">
      <b-row>
        <b-col lg="12" md="8" sm="4">
          <h2 class="d-inline">CSE 230</h2>
          <b-button variant="info" size="lg" class="float-right">
            Student: {{ studentName }}
          </b-button>
        </b-col>
      </b-row>
    </div>
    <br />
    <b-row>
      <b-col lg="12" md="8" sm="4">
        <div class="card border-primary mb-12">
          <div class="card-header">Group {{ studentGroup }}</div>
          <div class="card-body">
            Ho ho.
            <!-- <div v-bind:id="editorDiv(studentBuffer)"></div> -->
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Student extends Vue {
  name = "Student";

  get studentName() {
    return this.$store.getters.currentUser.name;
  }

  get studentGroup() {
    // return "55";
    console.log("studentGroup", 92);
    const foo = this.$store.getters.currentUser;
    console.log("studentGroup", foo);
    return foo.group;
  }
}
</script>
