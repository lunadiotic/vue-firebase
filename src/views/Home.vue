<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
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
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (! data.ok) {
          throw Error('Tidak ada data')
        }
        posts.value = await data.json()
      } catch (err) {
        error.value = err.message
      }
    }

    load()

    return { posts, error }
  }
}
</script>
