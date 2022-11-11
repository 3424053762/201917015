window.addEventListener('load', function () {
    let list_itd = document.querySelector('.list_itd');
    let lis = list_itd.querySelectorAll('li');
    // console.log(lis);
    // let content=document.querySelector('.cote');
    let items = document.querySelectorAll('.item');
    // for循环绑定点击事件
    for (let i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号 
        lis[i].setAttribute('index', i);
        lis[i].onclick = function () {
            // 1. 模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式

            // 干掉所有人 其余的li清除 class 这个类
            for (let i = 0; i < lis.length; i++) {
                lis[i].className = '';

            }
            // 留下我自己 
            this.className = 'current';

            // 2. 下面的显示内容模块
            let index = this.getAttribute('index');
            // console.log(index);
            // 干掉所有人 让其余的item 这些div 隐藏
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            items[index].style.display = 'block';
        }
    }
})