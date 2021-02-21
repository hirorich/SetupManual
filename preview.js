// ToDo: jQueryを読み込む

// README.md を id="preview" に埋め込む
$(function() {
    fetch('./README.md')
        .then(response => response.text())
        .then(result => document.getElementById('preview').innerHTML = marked(result));
});
