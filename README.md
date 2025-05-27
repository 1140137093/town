# 小镇 - uni-app x 项目

## 项目简介
这是一个基于 uni-app x 的小镇应用，包含首页、聊天和个人中心三个主要功能模块。

## 功能特性
- ?9?2 **首页**: 展示欢迎横幅、功能网格和最新动态
- ?9?6 **聊天**: 聊天列表界面，显示用户对话
- ?9?4 **我的**: 个人中心，包含用户信息和功能菜单

## 技术栈
- HTML5 + CSS3 + JavaScript
- Express.js 服务器
- UTF-8 编码支持

## 启动方式

### 方法一：使用 Express 服务器
```bash
# 安装依赖
npm install express open

# 启动服务器
node server.js
```

### 方法二：直接访问
服务器启动后，访问以下链接：
- 主应用: http://localhost:3000
- 编码测试: http://localhost:3000/test.html

## 编码问题解决方案

### 已修复的问题
1. ?7?3 服务器 UTF-8 编码支持
2. ?7?3 HTML 文件字符编码设置
3. ?7?3 JavaScript 文件中的 emoji 显示
4. ?7?3 中文字符正确显示

### 文件编码设置
- `server.js`: 设置了完整的 UTF-8 支持
- `index.html`: 添加了多重编码声明
- `main.js`: 修复了 emoji 乱码问题
- `style.css`: 确保样式文件编码正确

## 项目结构
```
town/
├── index.html          # 主页面
├── main.js            # 主要逻辑
├── style.css          # 样式文件
├── server.js          # Express 服务器
├── test.html          # 编码测试页面
├── verify.js          # 验证脚本
└── README.md          # 项目说明
```

## 测试验证
运行验证脚本检查项目状态：
```bash
node verify.js
```

## 注意事项
- 确保 Node.js 环境已安装
- 如果控制台中文显示异常，不影响浏览器正常显示
- 建议使用现代浏览器访问以获得最佳体验

## 故障排除
如果遇到编码问题：
1. 确认文件保存为 UTF-8 编码
2. 检查浏览器字符编码设置
3. 访问 `/test.html` 进行编码测试 