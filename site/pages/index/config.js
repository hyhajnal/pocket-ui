import { toCamel, lowerInitial } from '../../../utils';

const requireFiles = require.context('../../../src/components', true, /\.json/)
const components = []

requireFiles.keys().forEach(key => {
    const info = requireFiles(key)
    const name = info.name.replace('@pocket/', '')
    components.push({
        title: info.description,
        name: lowerInitial(toCamel(name)),
        compName: toCamel(name),
    })
})

const menus = [
    {
        title: '介绍',
        name: 'intro',
        path: '../../markdown/intro.md'
    },
    {
        title: '快速开始',
        name: 'quickStart',
        path: '../../markdown/quickstart.md'
    },
    {
        title: '更新日志',
        name: 'changeLog',
        path: '../../markdown/changelog.md'
    },
    {
        title: '基础组件',
        children: components
    },
    {
        title: '指令',
        children: [
            {
                title: '曝光埋点',
                name: 'exposure',
                path: ''
            },
        ],
    },
];

export {
    menus
};