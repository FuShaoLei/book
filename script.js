/* globals Docute */

new Docute({
  target: '#docute',
  sourcePath: './docs/',
  nav: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About',
      link: '/about'
    }
  ],
  sidebar: [
    {
      title: 'Guide',
      links: [
        {
          title: '我对Android MVP模式的理解',
          link: '/introduction'
        },
        {
          title: 'Installation',
          link: '/installation'
        }
      ]
    }
  ]
})
