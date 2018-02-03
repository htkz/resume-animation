const $codeArea = $('#codeArea');
const $styleArea = $('#styleArea');
const $mdArea = $('#mdArea')

// interval time
const slowTime = 5;
const quickTime = 5;

const writeCss = (prefix, css, intervalTime, callback) => {
    let n = 0;
    const intervalId = setInterval(() => {
        n += 1;
        const codeString = prefix + css.substring(0, n);
        const codeWithHighLightTag = Prism.highlight(prefix + codeString, Prism.languages.css);
        $codeArea.html(codeWithHighLightTag);
        $styleArea.html(codeString);
        $codeArea.scrollTop(codeArea[0].scrollHeight);
        if (n >= css.length) {
            window.clearInterval(intervalId);
            callback();
        }
    }, intervalTime)
}

const writeMarkdown = ($mdArea, prefix, md, intervalTime, callback) => {
    let m = 0;
    const intervalId_md = setInterval(() => {
        m += 1;
        const textString = prefix + md.substring(0, m);
        $mdArea.html(textString);
        $mdArea.scrollTop(codeArea[0].scrollHeight);
        if (m >= md.length) {
            window.clearInterval(intervalId_md);
            callback();
        }
    }, intervalTime);
}

writeCss('', textInfo, slowTime, () => {
    writeMarkdown($mdArea, '', markdownInfo, slowTime, () => {
        writeCss(textInfo, textInfo2, slowTime, () => {
            // to fix the bug on mobile
            // SyntaxError: Can't create duplicate variable that shadows a global property: 'mdArea'
            $mdArea.contents().unwrap().wrap('<div/>');
            const newMdArea = $('.textEditor').children('div');
            newMdArea.addClass('markdown-body')
            writeMarkdown(newMdArea, '', marked(markdownInfo), quickTime, () => {
                writeCss(textInfo + textInfo2, textInfo3, slowTime, () => {
                    console.log('Finished!');
                })
            })
        })
    })
});
