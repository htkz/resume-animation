textInfo = `
/*
* Inspired by http://strml.net/
* 大家好，我是htkz
* 二月了，好多公司都在招聘，你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}

/* 白色背景太单调了，我们来点背景 */
.styleEditor {
  background: rgb(0,43,54);
  color: rgb(222,222,222);
}

/* 文字离边框太近了 */
.styleEditor {
  padding: 16px;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
#codeArea {
    transform: rotate(360deg);
}

/* 现在正式开始 */
/* 我需要一张白纸 */
.textEditor {
    height: 100vh;
    width: 50%;
    color: black;
    padding: 16px;
}

/* 于是我就可以在白纸上写字了，请看右边 */
`

textInfo2 = `
/* 接下来用一个优秀的库 marked.js
 * 把 Markdown 变成 HTML
 */
`

textInfo3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */`

markdownInfo = `
# Htkz
明光村中学毕业，前端小白，有三个月的前端基础，现在在找工作。

# 技能
* HTML+CSS+JS
* Jquery+Vue
* Node.js 开发
* Django 开发

# 项目介绍
1. [数据计算器](http://sigmod.dyndns.org:8000/app/data_calc/)
2. [Canvas画板](https://htkz.github.io/canvas/dist/index.html)
3. [在线简历](https://htkz.github.io/resume/resume.html)
4. [导航首页](https://htkz.github.io/test-jirengu/class/class16/nav/index.html)

# 链接
* [GitHub](https://github.com/htkz)
* [我的文章](https://www.jianshu.com/u/2e98f264f88a)

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/htkz/resume-animation)，打造你自己的简历！
`
