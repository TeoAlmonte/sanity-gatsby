export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebb0ac9a534fae657b59288',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-f6rk81az',
                  apiId: 'bb9bfcc2-3840-4e4b-9cb1-6f5cc2650b3b'
                },
                {
                  buildHookId: '5ebb0ac95e2d42d7fa89b7c2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-78cndtwt',
                  apiId: '9dc64a90-a709-45d0-9821-2ad254b4382d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TeoAlmonte/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-78cndtwt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
