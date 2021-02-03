// 导出配置
module.export = {
    configurewebpack: {
        resolve: {
            // 配置extensions时，后缀名就可以不写了
            // extensions: [],
            alias: {
                // '@': 'src',
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'router': '@/router',
                'store': '@/store',
                'views': '@/views',
            },
        }
    }
}