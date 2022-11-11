window.addEventListener('load',function(){


    let arrow_l = document.querySelector('.arrow-l');
    let arrow_r = document.querySelector('.arrow-r');
    let focus = document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    //鼠标经过事件
    focus.addEventListener('mouseenter', function () {
        //让左右按钮显示
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        //清除自动轮播定时器
        clearInterval(timer);
        timer = null;
    })
    //鼠标离开事件
    focus.addEventListener('mouseleave', function () {
        //让左右按钮隐藏
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        //添加定时器
        timer = setInterval(function () {
            arrow_r.click();
        }, 3000)
    })
    // --------------------------------------


    // --------------------------------------
    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('.circle');

    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';

            let index = this.getAttribute('index');
            num = index;
            circle = index;
            // console.log(index);
            // console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    let first = ul.children[0].cloneNode(true);
    ul.appendChild(first);

    //制作右侧按钮
    let num = 0;
    let circle = 0;
    let flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果走到了最后一张图片，此时ul快速复原left为0
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //点击右侧按钮，小圆圈一起变化
            circle++;
            //如果circle==4，说明走到最后一张图片了，我们就复原circle的值
            if (circle == ol.children.length) {
                circle = 0;
            }
            //先清除小圆圈的current类名
            // for (let i = 0; i <= ol.children.length; i++) {
            //     ol.children[i].className = '';
            // }

            // //留下当前小圆圈的current类名
            // ol.children[circle].className = 'current';
            circleChange();
        }

    })
    //制作左侧按钮
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            //如果走到了第一张图片，此时ul快速复原left为0
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //点击右侧按钮，小圆圈一起变化
            circle--;
            //如果circle<0，说明走到最后一张图片了，我们就复原circle的值
            if (circle < 0) {
                circle = ol.children.length - 1;
            }

            circleChange();
        }

    })
    //轮播图功能实现，使用定时器
    let timer = setInterval(function () {
        arrow_r.click();
    }, 5000)

    //小圆圈变化封装函数
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前的小圆圈的current类名
        ol.children[circle].className = 'current';
    }






    //====================================================================
    let ns_c = document.querySelector('.ns_c');
    ns_c.addEventListener('click', function () {
        open('https://mp.weixin.qq.com/s/xjXnES6UaL3VZeWTSYDzlg', '_blank');
    })

})