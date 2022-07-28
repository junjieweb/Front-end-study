(function () {

    /*
        点击下一个按钮，切换到下一站图片
    */
//获取所有的存储图片的li
    let imgList = document.querySelectorAll('.banner li');

//创建一个变量来记录当前显示的图片
    let currentIndex = 0;

//获取下一个按钮
    let next = document.querySelector('.prev-next .next');
//获取上一个按钮
    let prev = document.querySelector('.prev-next .prev');

//获取所有的导航点的a标签
    let pointers = document.querySelectorAll('.pointer a');
//遍历pointers
    for (let i = 0; i < pointers.length; i++) {
        pointers[i].index = i;
    }

//获取class为pointer的元素
    let pointer = document.querySelector('.banner .pointer');

//获取class 为prev-next 的元素
// let prevNext = document.querySelector('.prev-next');
// 获取banner
    let banner = document.querySelector('.banner');
    banner.addEventListener('click', function (event) {
        //取消默认行为
        event.preventDefault();

        //判断事件是谁触发的
        if (event.target === next) {
            changeImg(currentIndex + 1);
        } else if (event.target === prev) {
            changeImg(currentIndex - 1);
        } else if (event.target.parentNode === pointer) {
            //判断触发元素是否是导航小点

            //判断出来，切换图片
            //点击第一个点，切换到第一张，点击第二个点，切换到第二张
            //问题是，我点的是第几个点
            // alert(event.target.index);
            changeImg(event.target.index);
        }

    });

//创建一个公共的函数，用来切换图片
//需要一个参数index，表示要切换到的图片
    function changeImg(index) {
        //index 表示要去的位置
        //currentIndex 表示当前图片的位置

        //检查index是否合法
        if (index < 0) {
            index = imgList.length - 1;
        } else if (index >= imgList.length) {
            index = 0;
        }

        //将之前显示的图片的zIndex取消
        imgList[currentIndex].style.zIndex = '';
        //将之前选中的导航点取消
        pointers[currentIndex].className = '';
        //将之前图片的不透明度设置为0
        imgList[currentIndex].style.opacity = 0;

        //将当前图片的zIndex设置为1
        imgList[index].style.zIndex = 1;
        //将当前图片的不透明度也设置为1
        imgList[index].style.opacity = 1;
        //将当前图片所对应的导航点设置为选中状态
        pointers[index].className = 'active';

        //将currentIndex修改为index
        currentIndex = index;
    }
})();