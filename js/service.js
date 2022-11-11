window.addEventListener('load', function () {
    //----------------------------留言模块开始------------------------------------
    //获取元素
    let rBtn = document.querySelector('#release');
    // console.log(rBtn);
    let rTextarea = document.querySelector('#messageInput');
    // console.log(rTextarea);
    let messageUL = document.getElementById('message_ul');
    // console.log(messageUL);
    rBtn.onclick = function () {
        if (rTextarea.value == '') {
            alert('请输入内容');
            return false;
        } else {
            //1.创建元素
            let li = document.createElement('li');
            li.innerHTML = rTextarea.value + "<a href='javascript:;'>删除</a>";
            //2.添加元素
            messageUL.insertBefore(li, messageUL.children[0]);
            // (3) 删除元素 删除的是当前链接的li  它的父亲
            let as = document.querySelectorAll('a');
            for (let i = 0; i < as.length; i++) {
                as[i].onclick = function () {
                    // node.removeChild(child); 删除的是 li 当前a所在的li  this.parentNode;
                    messageUL.removeChild(this.parentNode);
                }
            }
        }
    }
    //--------------------------------留言模块结束-------------------------------------
})