const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Gridsome with Netlify + NetlifyCMS + TailwindCSS',
  siteDescription: 'Gridsome Starter Kit using Netlify for Deployments, NetlifyCMS for Content Management and TailwindCSS for Styling',
  titleTemplate: 'Gridsome with Netlify + NetlifyCMS + TailwindCSS',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss,
          require('postcss-nesting')(),
          require('autoprefixer')()
        ]
      }
    }
  },
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        ['gridsome-plugin-remark-shiki', { skipInline: true }]
      ]
    }
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwind',
      options: {
        config: './tailwind.config.js'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'Post',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    },
		{
			use: 'gridsome-plugin-netlify-cms',
			options: {
				publicPath: '/admin'
			}
		}
  ]
}
