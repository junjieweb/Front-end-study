module.exports = {
  title: '数据可视化',
  base: '/datav-docs/',
  description: '数据可视化学习官网',
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: `logo.jpg` }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '基础阶段',
          collapsable: true,
          children: [
            'guide/scene',
            'guide/tech',
            'guide/canvas',
            'guide/svg',
            'guide/echarts',
            'guide/echarts-basic',
          ]
        },
        {
          title: '数据报表项目',
          collapsable: true,
          children: [
            'report/intro',
            'report/guide',
            'report/qa',
            'report/summary',
          ]
        },
      ]
    }
  }
}
