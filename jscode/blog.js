
function hashAlgorithm(){
    var key = document.getElementById("txtInput").value;
    var hash = 5381;
    var c;
    for(let i = 0; i < key.length; i++){
        c = key.charCodeAt(i);
        hash = ((hash << 5) + hash) + c;
    }
    var output = document.getElementById('output');
    output.innerHTML = hash;
}