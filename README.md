# 随机二次元图片
获取随机二次元图片
## 声明:
本仓库所有图片均来源于网络搜集，如有版权侵犯，请联系删除
## 使用方法
在你的页面中添加如下代码：
```html
<div id="randomACG"></div>
<script src="https://cdn.jsdelivr.net/gh/CSneko/randomImage@main/ACG.js"></script>
```
`ID`为`randomACG`的元素用来放置图片等，你只需要把它放入合适的地方即可

如果要自定义图片样式，请对`ID`为`randomAGCImg`设置样式

一个示例:将图片以50%的大小居中显示：
```html
<html>
    <head>
        <style>
            #randomAGCImg{
                width: 50%;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div id="randomACG"></div>
    </body>
    <script src="https://cdn.jsdelivr.net/gh/CSneko/randomImage@main/ACG.js"></script>
</html>

```