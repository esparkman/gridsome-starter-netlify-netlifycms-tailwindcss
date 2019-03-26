<template>
  <Layout>
    <Pager :info="$page.allPost.pageInfo" />
    <ul>
      <li v-for="{ node } in $page.allPost.edges" :key="node.id">
        <h2 v-html="node.title"/>
        <div v-html="node.excerpt" />
        <router-link :to="node.path">Read more...</router-link>
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Home($page: Int) {
  allPost(perPage: 10, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
