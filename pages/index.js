#新建并进入一个新文件夹
mkdir vercel && cd vercel
#建立配置文件
vi vercel.json
#配置文件内容
{
  "name": "chuanyun",
  "version": 2,
  "routes": [
    {"src": "/(.*)","dest": "http://mt0.google.com"}
  ]
}
