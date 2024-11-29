// 声明一个包含 URL 的数组，每个 URL 对应一张图片
const images = [
    '.././IMAGES/1.jpg',
    '.././IMAGES/2.jpg',
    '.././IMAGES/3.jpg',
    '.././IMAGES/4.jpg'
]

// 定义当前显示图片的索引，初始值为 0 (即显示第一张图片)
let index = 0

// 定义一个函数，用来切换图片效果
function changeImage(action) {
    index += action // 根据方向 (1 或 -1) 修改 index

    // 确保 index 不会超出合法的范围
    if (index < 0) {
        index = images.length - 1 // 如果索引小于 0，跳到数组的最后一张相片
    } else if (index >= images.length) {
        index = 0 // 如果索引超出数组的最后一张，则跳回到第一张
    }

    // 更新页面中显示的图片信息
    document.getElementById('gallery-image').src = images[index]
}

// 延时
let timer = setInterval(function(){
    changeImage(1) // 每秒自动切换到下一张
},1000)


// 做一个定时器 到了规定时间就停止播放
setInterval(function(){
    // 到了6秒就时间停止
    clearInterval(timer)
  },6000)
// 检测数组
console.log(images)
