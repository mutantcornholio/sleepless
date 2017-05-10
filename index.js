new NoSleep().enable();

var button = document.getElementById('go');
var daFrame = document.getElementById('da-frame');
var urlInput = document.getElementById('url-input');

button.addEventListener('click', function () {
    daFrame.src = urlInput.value;
});

urlInput.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        daFrame.src = urlInput.value;
    }
});
