var API_KEY = 'tUoNt8MyihAWUi9QejpXbqvOtmNTIbszlAQUOVBO';
var baseurl = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY;

var datePicker = document.getElementById('date-picker');
datePicker.max = getTodayDate();
datePicker.value = getTodayDate();
var date = datePicker.value;

var url = baseurl + '&date=' + date;

makeApiRequest(url, function (reponse) {

});


function makeApiRequest(url, callback) {

    document.getElementById("date-picker").disabled = true;
    document.getElementById("progress").style.display = "inline";
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                var responseText = httpRequest.responseText;
                var responseJson = JSON.parse(responseText);
                console.log(responseJson);
                getJsonContent(responseJson);
            } else {
                var showError = document.getElementById('error');
                showError.innerHTML = 'Sorry! Unable to download data for current date.';
                showError.style.display = 'block';
                document.getElementById("progress").style.display = 'none';
                document.getElementById('date-picker').disabled = false;
            }
        }
    }
    // Executes the AJAX request
    httpRequest.open('GET', url, true);
    httpRequest.send();
};

datePicker.addEventListener('input', function (e) {
    date = datePicker.value;
    var url = baseurl + '&date=' + date;
    datePicker.disabled = true;
    makeApiRequest(url);
});

function getJsonContent(data) {
    document.getElementById('img').setAttribute('src', data.url);
    document.getElementById('title').textContent = data.title;
    document.getElementById('desc').textContent = data.explanation;
    document.getElementById('date-picker').disabled = false;
    document.getElementById("progress").style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

function getTodayDate() {
    var now = new Date();

    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();

    return year + '-' + month + '-' + day;
}
