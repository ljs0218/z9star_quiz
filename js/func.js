var quizData;

function init() {
    quizData = JSON.parse(JSON.stringify(data));
}

function refreshStr() {
    const inputText = document.getElementById('name').value;

    if (inputText == "") {
        document.getElementById("result").innerText = "";
        return;
    }

    var text = "";
    for (var i = 0; i < quizData.length; i++) {
        var str = quizData[i]["question"].toUpperCase();
        if(str.includes(inputText.toUpperCase()) > 0) {
            text += "정답 : " + quizData[i]["answer"] + "\n" + quizData[i]["question"] + "\n\n"
        }
    }

    document.getElementById("result").innerText = text;
}