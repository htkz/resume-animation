const $codeArea = $('#codeArea');
const $styleArea = $('#styleArea');
let $mdArea = $('#mdArea');

// interval time
const slowTime = 5;
const quickTime = 5;

const writeCss = (prefix, css, intervalTime) => {
    return new Promise((resolve, reject) => {
        let n = 0;
        const intervalId = setInterval(() => {
            n += 1;
            const codeString = prefix + css.substring(0, n);
            const codeWithHighLightTag = Prism.highlight(prefix + codeString, Prism.languages.css);
            $codeArea.html(codeWithHighLightTag);
            $styleArea.html(codeString);
            $codeArea.scrollTop($codeArea[0].scrollHeight);
            if (n >= css.length) {
                window.clearInterval(intervalId);
                resolve();
            }
        }, intervalTime)
    })

}

const writeMarkdown = ($mdArea, prefix, md, intervalTime) => {
    return new Promise((resolve, reject) => {
        let m = 0;
        const intervalId_md = setInterval(() => {
            m += 1;
            const textString = prefix + md.substring(0, m);
            $mdArea.html(textString);
            $mdArea.scrollTop($codeArea[0].scrollHeight);
            if (m >= md.length) {
                window.clearInterval(intervalId_md);
                resolve();
            }
        }, intervalTime);
    })

}

const replacePreWithDiv = () => {
    $mdArea.contents().unwrap().wrap('<div/>');
    $mdArea = $('.textEditor').children('div');
    $mdArea.addClass('markdown-body')
}

const init = async () => {
    await writeCss('', textInfo, slowTime);
    await writeMarkdown($mdArea, '', markdownInfo, slowTime);
    await writeCss(textInfo, textInfo2, slowTime);
    replacePreWithDiv();
    await writeMarkdown($mdArea, '', marked(markdownInfo), quickTime);
    await writeCss(textInfo + textInfo2, textInfo3, slowTime);
}

init();
