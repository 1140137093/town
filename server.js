const express = require('express');
const path = require('path');
const open = require('open');

const app = express();
const port = 3000;

// ǿ��������Ӧʹ��UTF-8����
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// ����express֧��UTF-8����
app.use(express.json({ charset: 'utf-8' }));
app.use(express.urlencoded({ extended: true, charset: 'utf-8' }));

// ���þ�̬�ļ�Ŀ¼����ָ����ȷ��MIME����
app.use(express.static('.', {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    }
    // ���û���
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// ·�ɴ��� - ������index.html
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// �򵥲���ҳ��
app.get('/simple', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(path.join(__dirname, 'simple-test.html'));
});

app.listen(port, () => {
  console.log('? ��Ŀ�������������� http://localhost:' + port);
  console.log('? ����������в鿴����uni-app��Ŀ');
  console.log('? �򵥲���: http://localhost:' + port + '/simple');
  
  // �Զ��������
  open('http://localhost:' + port + '/simple');
}); 