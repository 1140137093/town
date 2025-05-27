// 验证脚本 - 检查项目状态
const http = require('http');
const fs = require('fs');

console.log('='.repeat(50));
console.log('项目状态检查');
console.log('='.repeat(50));

// 检查文件编码
function checkFileEncoding(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        const hasChineseChars = /[\u4e00-\u9fa5]/.test(content);
        console.log(`?7?7 ${filename}: ${hasChineseChars ? '包含中文字符' : '无中文字符'}`);
        return true;
    } catch (error) {
        console.log(`?7?1 ${filename}: 读取失败 - ${error.message}`);
        return false;
    }
}

// 检查服务器连接
function checkServer() {
    return new Promise((resolve) => {
        const req = http.get('http://localhost:3000', (res) => {
            console.log(`?7?7 服务器状态: ${res.statusCode}`);
            resolve(true);
        });
        
        req.on('error', (error) => {
            console.log(`?7?1 服务器连接失败: ${error.message}`);
            resolve(false);
        });
        
        req.setTimeout(3000, () => {
            console.log('?7?1 服务器响应超时');
            req.destroy();
            resolve(false);
        });
    });
}

async function runChecks() {
    console.log('1. 文件编码检查:');
    checkFileEncoding('index.html');
    checkFileEncoding('main.js');
    checkFileEncoding('style.css');
    checkFileEncoding('test.html');
    
    console.log('\n2. 服务器连接检查:');
    await checkServer();
    
    console.log('\n3. 测试链接:');
    console.log('   主应用: http://localhost:3000');
    console.log('   编码测试: http://localhost:3000/test.html');
    console.log('\n4. 如果浏览器中中文显示正常，说明编码问题已解决！');
    console.log('='.repeat(50));
}

runChecks(); 