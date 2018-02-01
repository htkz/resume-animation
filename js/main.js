const codeArea = $('#codeArea');
const styleArea = $('#styleArea');
const mdArea = $('#mdArea')
const mdStyleArea = $('mdStyleArea');

const writeCode = (callback) => {
    let n = 0;
    const intervalId = setInterval(() => {
        n += 1;
        const codeString = textInfo.substring(0, n);
        const codeWithHighLightTag = Prism.highlight(codeString, Prism.languages.css);
        codeArea.html(codeWithHighLightTag);
        styleArea.html(codeString);
        codeArea.scrollTop(codeArea[0].scrollHeight);
        if (n >= textInfo.length) {
            window.clearInterval(intervalId);
            callback();
        }
    }, 10)
}

const writeMarkdown = () => {
    let m = 0;
    const intervalId_md = setInterval(() => {
        m += 1;
        const textString = markdownInfo.substring(0, m);
        mdArea.html(textString);
        mdArea.scrollTop(codeArea[0].scrollHeight);
        if (m >= textInfo.length) {
            window.clearInterval(intervalId_md);
        }
    }, 10);
}

writeCode(writeMarkdown);
