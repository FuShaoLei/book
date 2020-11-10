/* globals Docute */

new Docute({
  title: "Sorryfu Book",
  highlight: ['typescript', 'go', 'graphql','java','c','c++','bash','kotlin'],
  target: '#docute',
  sourcePath: './docs/',
  sidebar: [
    {
      title: 'Android',
      links: [
        {
          title: 'MVP模式',
          link: '/Android/MVP模式'
        }
      ]
    },
    {
      title: '《Kotlin实战》',
      links: [
        {
          title: 'Kotlin基本要素',
          link: '/《Kotlin实战》/Kotlin基本要素'
        }
      ]
    },
    {
      title: '数据结构',
      links: [
        {
          title: 'C语言快速入门',
          link: '/数据结构/C语言快速入门'
        }
      ]
    }
  ]
})