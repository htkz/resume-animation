const codeArea = $('#codeArea');
const styleArea = $('#styleArea');
let mdArea = $('#mdArea')
const mdStyleArea = $('mdStyleArea');

const writeCss = (prefix, css, callback) => {
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
    }, 10)
}

const writeMarkdown = (prefix, md, callback) => {
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
    }, 10);
}

const replacePreWithDiv = () => {
    mdArea.contents().unwrap().wrap('<div/>');
    mdArea = $('.textEditor').children('div');
    mdArea.addClass('markdown-body')
}

writeCss('', textInfo, () => {
    writeMarkdown('', markdownInfo, () => {
        writeCss(textInfo, textInfo2, () => {
            replacePreWithDiv();
            writeMarkdown(marked(markdownInfo), '', () => {
                writeCss(textInfo + textInfo2, textInfo3, () => {
                    
                })
            })
        })
    })
});
