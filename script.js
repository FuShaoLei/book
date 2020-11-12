/* globals Docute */

new Docute({
  title: "Sorryfu Book",
  highlight: ['typescript', 'go', 'graphql','java','c','c++','bash','kotlin'],
  editLinkBase: "https://github.com/FuShaoLei/book/edit/main/docs/",
  target: '#docute',
  sourcePath: './docs/',
  sidebar: [
    {
      title: '《Java技术卷一》',
      links: [
        {
          title: 'Java的基本程序结构设计',
          link: '/《Java技术卷一》/Java的基本程序结构设计'
        }
      ]
    },
    {
      title: 'Android',
      links: [
        {
          title: 'Android常见布局',
          link: '/Android/Android常见布局'
        },       
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