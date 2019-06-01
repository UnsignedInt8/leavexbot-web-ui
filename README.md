# LeaveXChat-Web-UI

用于将文字转换为图片消息

```
git clone https://github.com/UnsignedInt8/leavexchat-web-ui.git
cd leavexchat-web-ui
npm i
npm run build
```

将 `static` 目录的路径写入config.json的 `msgui/avatarDir` 字段里，`msgui/url` 就填写该 http 服务的请求url，举个🌰️

```json
{
    "token": "123456:AAFHyaUqz3sRnh5FguVZtdnVI",
    "msgui": {
        "url": "http://localhost:3000",
        "avatarDir": "/Users/telegram/leavexchat-web-ui/build/static"
    }
}
```

## Lisence 

MPL-2.0