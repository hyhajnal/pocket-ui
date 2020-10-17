
const path = require('path');
const npmScript = process.env.npm_lifecycle_event;
const isDocs = npmScript.includes('docs');

const docsConfig = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    pages: {
        index: {
            entry: 'site/pages/index/main.js',
            template: 'site/pages/index/index.html',
            filename: 'index.html',
            title: 'PocketUI',
        },
        mobile: {
            entry: 'site/pages/mobile/main.js',
            template: 'site/pages/mobile/index.html',
            filename: 'mobile.html',
            title: 'PocketUI-Mobile',
        },
    },
    outputDir: path.resolve(process.cwd(), './docs'),
    chainWebpack: config => {
      config.module.rule('md')
        .test(/\.md/)
        .use('vue-loader')
        .loader('vue-loader')
        .end()
        .use('vue-markdown-loader')
        .loader('vue-markdown-loader/lib/markdown-compiler')
        .options({
          raw: true
        })
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5, // 换算的基数
                        selectorBlackList: [], // 忽略转换正则匹配项
                        propList: ['*'],
                        exclude: /^((?!pages\/mobile).)*/
                    }),
                ]
            }
        }
    }
};


const comp = JSON.parse(process.env.npm_config_argv).cooked.pop();

const compConfig = {
    pages: {
        index: {
            entry: 'src/components/' + comp + '/demo/main.js',
        },
    },
}

module.exports = isDocs ? docsConfig : compConfig;