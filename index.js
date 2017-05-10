new NoSleep().enable();

var button = document.getElementById('go');
var daFrame = document.getElementById('da-frame');
var urlInput = document.getElementById('url-input');

var query = parseQuery(window.location.search);

if (query.url) {
    urlInput.value = query.url;
    updateUrl();
}

function updateUrl() {
    var url = urlInput.value;
    daFrame.src = url;
    window.history.pushState({}, 'url', window.location.pathname.replace(/\/+$/, "") + '/?url=' + encodeURIComponent(url));
}

button.addEventListener('click', updateUrl);

urlInput.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        updateUrl();
    }
});

function parseQuery(qstr) {
    var query = {};
    var a = (qstr[0] === '?' ? qstr.substr(1) : qstr).split('&');
    for (var i = 0; i < a.length; i++) {
        var b = a[i].split('=');
        query[decodeURIComponent(b[0])] = decodeURIComponent(b[1] || '');
    }
    return query;
}
