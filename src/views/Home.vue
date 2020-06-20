<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <template v-if="isInstructor"><Instructor /></template>
    <template v-else><Student /></template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Instructor from "@/components/Instructor.vue";
import Student from "@/components/Student.vue";

@Component({
  components: {
    HelloWorld,
    Instructor,
    Student
  }
})
export default class Home extends Vue {
  name = "Home";

  get isInstructor() {
    return this.$store.getters.userType == "instructor";
  }
}
</script>
