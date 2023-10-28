document.addEventListener("DOMContentLoaded", function(){
    //生成随机数
    var randomNum = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
    //获取链接
    var link = `https://cdn.jsdelivr.net/gh/CSneko/randomImage@main/ACG/${randomNum}.jpg`
    //获取&替换元素
    var div = document.getElementById('randomACG');
    div.innerHTML = `<img src='${link}' alt='二次元图片'>`;
})