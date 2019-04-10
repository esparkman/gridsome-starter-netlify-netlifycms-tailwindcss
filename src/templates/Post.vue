<template>
  <Layout>
    <div class="mt-8">
      <h1 class="pb-1 text-xl font-bold">
        {{ $page.post.title }}
      </h1>
      <div class="my-4">
        Posted {{ $page.post.date }}
        <template v-if="$page.post.timeToRead">
          <strong>{{ $page.post.timeToRead }} min read.</strong>  
        </template>  
      </div>
    </div>
    <div class="post__header">
      <img alt="Cover image" class="w-full rounded rounded-b-none h-48 object-cover" v-if="$page.post.coverImage" :src="$page.post.coverImage" />
    </div>
    <div class="px-4 py-4 rounded shadow-lg">
      <div class="markdown mt-8" v-html="$page.post.content" />
    </div>
    <div class="py-4">
      <div class="post-tags">
        <g-link v-for="tag in $page.post.tags" :key="tag.id" :to="tag.path">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{{ tag.title }}</span>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post($path: String!) {
  post: post(path: $path) {
    title
    path
    date (format: "MMM D YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    content
    coverImage (height: 320, quality: 100)
  }
}
</page-query>

<script>
export default {}
</script>

<style lang="postcss">
.markdown {
  @apply text-lg text-black leading-normal;
  & > * + *,  & li + li, & li > p + p {
    @apply mt-6;
  }
  & strong {
    @apply text-black font-bold;
  }
  & a {
    @apply text-black font-semibold;
  }
  & strong a {
    @apply font-bold;
  }
  & h2 {
    @apply leading-tight text-xl font-bold text-black mb-2 mt-10;
  }
  & h3 {
    @apply leading-tight text-lg font-bold text-black mt-8 -mb-2;
  }
  & code {
    @apply font-mono text-sm inline bg-gray-100 px-1;
  }
  & pre code {
    @apply block bg-black p-4 rounded;
  }
  & blockquote {
    @apply border-l-4 border-gray-100 pl-4 italic;
  }
  & ul, & ol {
    @apply pl-5;
    @screen sm {
      @apply pl-10;
    }
  }
}
</style>