<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">main</router-link>
      </li>
      <li>
        <router-link to="users">users</router-link>
      </li>
      <li>
        <router-link to="comments">comments</router-link>
      </li>
      <li>
        <router-link to="photos">photos</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "AppSidebar"
})
</script>

<style scoped>

</style>
