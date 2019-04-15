<template>
  <Layout>
    <h1 class="text-center text-xl font-semibold">
      #{{ $page.tag.title }}
    </h1>
    <div class="max-w rounded overflow-hidden shadow-lg mt-8"  v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">
        <img :src="edge.node.coverImage" class="w-full h-48 object-cover" alt="Cover" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{edge.node.title}}</div>
          <p class="text-gray-700 text-base">
            {{edge.node.excerpt}}
          </p>
          <div class="mt-2">
            Posted {{ edge.node.date }}
            <template v-if="edge.node.timeToRead">
              <strong>{{ edge.node.timeToRead }} min read.</strong>  
            </template>
          </div>
        </div>
      </g-link>
      <div class="px-6 py-4">
        <div class="post-tags">
          <g-link v-for="tag in edge.node.tags" :key="tag.id" :to="tag.path">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ tag.title }}</span>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Tag ($id: String!) {
    tag (id: $id) {
      title
      belongsTo {
        edges {
          node {
            ...on Post {
              title
              path
              date (format: "MMM D YYYY")
              timeToRead
              excerpt
              coverImage (width: 860, blur: 10)
              content
              tags {
                id
                title
                path
              }
            }
          }
        }
      }
    }
  }
</page-query>

<script>
export default { }
</script>

<style>
.post__link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.0;
  overflow: hidden;
  text-indent: -9999px;
  z-index: 0;
}
</style>