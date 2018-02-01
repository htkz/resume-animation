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
  color: rgb(222,222,222);
  background: rgb(0,43,54);
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

/* 接下来我给自己准备一个编辑器 */
.textEditor {
    height: 100vh;
    width: 50%;
    background-color: yellow;
    color: black;
}
`

markdownInfo = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
