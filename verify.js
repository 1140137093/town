// ��֤�ű� - �����Ŀ״̬
const http = require('http');
const fs = require('fs');

console.log('='.repeat(50));
console.log('��Ŀ״̬���');
console.log('='.repeat(50));

// ����ļ�����
function checkFileEncoding(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf8');
        const hasChineseChars = /[\u4e00-\u9fa5]/.test(content);
        console.log(`?7?7 ${filename}: ${hasChineseChars ? '���������ַ�' : '�������ַ�'}`);
        return true;
    } catch (error) {
        console.log(`?7?1 ${filename}: ��ȡʧ�� - ${error.message}`);
        return false;
    }
}

// ������������
function checkServer() {
    return new Promise((resolve) => {
        const req = http.get('http://localhost:3000', (res) => {
            console.log(`?7?7 ������״̬: ${res.statusCode}`);
            resolve(true);
        });
        
        req.on('error', (error) => {
            console.log(`?7?1 ����������ʧ��: ${error.message}`);
            resolve(false);
        });
        
        req.setTimeout(3000, () => {
            console.log('?7?1 ��������Ӧ��ʱ');
            req.destroy();
            resolve(false);
        });
    });
}

async function runChecks() {
    console.log('1. �ļ�������:');
    checkFileEncoding('index.html');
    checkFileEncoding('main.js');
    checkFileEncoding('style.css');
    checkFileEncoding('test.html');
    
    console.log('\n2. ���������Ӽ��:');
    await checkServer();
    
    console.log('\n3. ��������:');
    console.log('   ��Ӧ��: http://localhost:3000');
    console.log('   �������: http://localhost:3000/test.html');
    console.log('\n4. ����������������ʾ������˵�����������ѽ����');
    console.log('='.repeat(50));
}

runChecks(); 