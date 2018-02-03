const codeArea = $('#codeArea');
const styleArea = $('#styleArea');
let mdArea = $('#mdArea')
const mdStyleArea = $('mdStyleArea');

// interval time
const slowTime = 50;
const quickTime = 5;

const writeCss = (prefix, css, intervalTime, callback) => {
    let n = 0;
    const intervalId = setInterval(() => {
        n += 1;
        const codeString = prefix + css.substring(0, n);
        const codeWithHighLightTag = Prism.highlight(prefix + codeString, Prism.languages.css);
        codeArea.html(codeWithHighLightTag);
        styleArea.html(codeString);
        codeArea.scrollTop(codeArea[0].scrollHeight);
        if (n >= css.length) {
            window.clearInterval(intervalId);
            callback();
        }
    }, intervalTime)
}

const writeMarkdown = (prefix, md, intervalTime, callback) => {
    let m = 0;
    const intervalId_md = setInterval(() => {
        m += 1;
        const textString = prefix + md.substring(0, m);
        mdArea.html(textString);
        mdArea.scrollTop(codeArea[0].scrollHeight);
        if (m >= md.length) {
            window.clearInterval(intervalId_md);
            callback();
        }
    }, intervalTime);
}

const replacePreWithDiv = () => {
    mdArea.contents().unwrap().wrap('<div/>');
    mdArea = $('.textEditor').children('div');
    mdArea.addClass('markdown-body')
}

writeCss('', textInfo, slowTime, () => {
    writeMarkdown('', markdownInfo, slowTime, () => {
        writeCss(textInfo, textInfo2, slowTime, () => {
            replacePreWithDiv();
            writeMarkdown('', marked(markdownInfo), quickTime, () => {
                writeCss(textInfo + textInfo2, textInfo3, () => {
                })
            })
        })
    })
});
