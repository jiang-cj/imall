module.exports = {
  configureWebpack: {
    resolve: {
      alias: { // 别名配置
        'pages': '@/views', // 这里是views文件夹的路径 src/views
        'components': '@/components' ,// 这里是components文件夹的路径 src/components
        'network':'@/network',
        'common':'@/common',
        'assets':'@/assets',
        'router':'@/router',
        "store":"@/store"
      }
    }
  }
}
