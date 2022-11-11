window.addEventListener('load', function () {
    //--------------------搜索框鼠标光标定位设置模块开始----------------------------
    let search = document.querySelector('input');
    search.onfocus = function () {
        if (this.placeholder === '华水七十年') {
            this.placeholder = '';
        }
        this.style.color = 'skyblue';
    }
    search.onblur = function () {
        if (this.placeholder === '') {
            this.placeholder = '华水七十年';
        }
        
    }

    //----------------------------搜索框光标定位设置模块结束------------------------------

    //-------------------------------header显示当前时间模块开始------------------------------
    let hour = document.querySelector('.hour');
    let minute = document.querySelector('.minute');
    let second = document.querySelector('.second');
    let weeks = document.querySelector('.weeks');
    getTime();
    setInterval(getTime, 1000);

    function getTime() {
        let date = new Date();
        // console.log(date.getDate());
        // var year=date.getFullYear();
        // var month=date.getMonth()+1;
        // var dates=date.getDate();
        let h = date.getHours();
        h = h < 10 ? '0' + h : h;
        hour.innerHTML = h + '\n' + ':';
        let m = date.getMinutes();
        m = m < 10 ? '0' + m : m;
        minute.innerHTML = m + '\n' + ':';
        let s = date.getSeconds();
        s = s < 10 ? '0' + s : s;
        second.innerHTML = s;
        let day = date.getDay();
        let arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        weeks.innerHTML = arr[day];
    }
    // ---------------------------------header显示当前时间模块结束-----------------------------
    //-------------------------------nav鼠标经过离开事件------------------------------------------
    //----------------也可直接使用css添加 a:hover   效果相同---------------------------------
    var onAs = document.querySelector('nav');
    // console.log(onAs.children);
    for (let i = 0; i < onAs.children.length; i++) {
        onAs.children[i].addEventListener('mouseover', function (e) {
            this.className = 'onMv1';
        })
        onAs.children[i].addEventListener('mouseout', function (e) {
            this.className = 'onMt1';
        })
        // console.log(onAs.children[i]);
    }
    //----------------------------------nav鼠标经过离开事件-----------------------
})