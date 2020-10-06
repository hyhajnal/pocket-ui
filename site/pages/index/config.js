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
        children: [
            {
                title: '按钮',
                name: 'button',
                path: ''
            },
            {
                title: '图墙',
                name: 'wall',
                path: ''
            },
            {
                title: '列表',
                name: 'listView',
                path: ''
            },
        ],
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