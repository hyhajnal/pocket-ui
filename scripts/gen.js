const path = require('path');
const fs = require('fs');

const TemplBath = path.join(__dirname, '../template');
const CompBath = path.join(__dirname, '../src/components');

const Comp = process.argv.slice(-1)[0];

const toCamel = (str) => {
    let arr = str.split( '-' );
    if (arr.length === 1) return str.charAt(0).toUpperCase() + str.slice(1);
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
}

/**
 * 错误处理函数
 * @param {*} err 
 */
const handleError = (err) => {
    console.log(err);
}

/**
 * 生成根目录
 * @param {*} compName 
 */
const genDir = (compName) => {
    const compPath = path.join(CompBath, compName);
    if (!fs.existsSync(compPath)) {
        fs.mkdirSync(compPath);
    }
}

/**
 * 替换组件相关信息
 * @param {*} filepath 
 */
const genFile = (filepath) => {
    console.log(filepath);
    let content = fs.readFileSync(filepath, 'utf-8');
        content = content.replace(/ExampleComp/ig, toCamel(Comp));
        content = content.replace(/example-comp/ig, Comp);

    writeFile(filepath, content);
}

/**
 * 写入文件，如果文件不在则创建目录
 */
const writeFile = (filepath, content) => {
    const relativePath = path.relative(TemplBath, filepath);
    const dirArr = relativePath.split('/').slice(0,-1);

    let nowPath = path.join(CompBath, Comp);
    dirArr.forEach((dir) => {
        nowPath = path.join(nowPath, dir); 
        if (!fs.existsSync(nowPath)) {
            fs.mkdirSync(nowPath);
        }
    });

    fs.writeFileSync(path.join(CompBath, Comp, relativePath), content);
}

/**
 * 递归读取template文件
 * @param {*} basePath 
 */
const handleFile = basePath => {
    fs.readdir(basePath, (err, files) => {
        if (err) return handleError(err);

        files.forEach(filename => {
            const filepath = path.join(basePath, filename);

            fs.stat(filepath, (err, stas) => {
                if (err) return handleError(err);
                if (stas.isDirectory()) {
                    handleFile(filepath);
                }
                if (stas.isFile()) {
                    genFile(filepath);
                }
            })
        });
    });
}

if (process.argv.length < 3) {
    return handleError('请输入需要创建的组件');
} else {
    genDir(Comp);
    handleFile(TemplBath);
}