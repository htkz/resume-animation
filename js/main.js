const codeArea = $('#codeArea');
const styleArea = $('#styleArea');


const writeCode = () => {
    n += 1;
    const codeString = textInfo.substring(0, n);
    const codeWithHighLightTag = Prism.highlight(codeString, Prism.languages.css);
    codeArea.html(codeWithHighLightTag);
    styleArea.html(codeString);
    if (n >= textInfo.length) {
        window.clearInterval(intervalId);
    }
}

let n = 0;
const intervalId = setInterval(writeCode, 0);
