<template>
  <Layout>
    <h1 v-html="$page.post.title"/>
    <div v-html="$page.post.content"/>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post(path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {}
</script>
