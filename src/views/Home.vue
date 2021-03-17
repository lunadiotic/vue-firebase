<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from 'vue'
export default {
  name: 'Home',
  components: {
    PostList
  },
  setup() {
    const posts = ref([
      { id: 1, title: 'Artikel Pertama di Februari', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore expedita mollitia perspiciatis!'},
      { id: 2, title: 'Artikel Kedua di Februari', body: 'Id similique iure, repellendus earum debitis enim dolor quibusdam quod modi nisi harum aspernatur dolorem voluptate delectus exercitationem reprehenderit voluptatibus qui quisquam.'}
    ])

    return { posts }
  }
}
</script>
