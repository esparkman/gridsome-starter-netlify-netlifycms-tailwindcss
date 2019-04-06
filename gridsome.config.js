// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome with Netlify + NetlifyCMS + TailwindCSS',
  siteDescription: 'Gridsome Starter Kit using Netlify for Deployments, NetlifyCMS for Content Management and TailwindCSS for Styling',
  titleTemplate: 'Gridsome with Netlify + NetlifyCMS + TailwindCSS',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
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
        typeName: 'Post'
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
