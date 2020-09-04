// function getKanye() {
//     let ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             let kanyeQuote = JSON.parse(this.responseText);
//             document.getElementById("kanye-quote").innerHTML = kanyeQuote.quote;
//         } else if (this.readyState != 4) {
//             document.getElementById("kanye-quote").innerHTML = "LOADING!";
//         } else {
//             document.getElementById("kanye-quote").innerHTML = "SOMETHING WENT WRONG!";

//         }

//     }
//     ajax.open("GET", "https://api.kanye.rest/", true);
//     ajax.send();
// }

function getGiphy() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let giphy = JSON.parse(this.responseText);
            document.getElementById("giphy").innerHTML = giphy.giphy;
        } else if (this.readyState != 4) {
            document.getElementById("giphy").innerHTML = "LOADING...";
        } else {
            document.getElementById("giphy").innerHTML = "Something went wrong...";
        }
    }
    ajax.open("GET", "https://random.dog/e3bb196a-0153-4122-8725-24a085404495.gif", true);
    ajax.send();
}

document.getElementById("giphy").addEventListener('click', giphy);