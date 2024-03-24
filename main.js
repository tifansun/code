var code = document.getElementById("code");
var btnCopy = document.getElementById("copyClip");
firebase.database().ref("script").on("value", (data) => {
    code.innerHTML = data.val();
});
var clipboard = new Clipboard('#copyClip')
clipboard.on('success', function (event) {
    btnCopy.innerHTML = "Copiado ✔";
    btnCopy.style.backgroundColor = "#42a5f5";
    window.setTimeout(function () {
        btnCopy.innerHTML = 'Copiar Script';
        btnCopy.style.backgroundColor = "";
    }, 1500);
});
clipboard.on('error', function (e) {
    btnCopy.innerHTML = 'Usa Control + C';
    btnCopy.style.backgroundColor = "#e86032";
    window.setTimeout(function () {
        btnCopy.innerHTML = "Copiar Script";
        btnCopy.style.backgroundColor = "";
    }, 1500);
});
function save() {
    firebase.database().ref().set({
        script: code.value
    })
}