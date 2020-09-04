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

// function getGiphy() {
//     let ajax = new XMLHttpRequest();
//     ajax.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {

//             let giphy = JSON.parse(this.responseText);
//             document.getElementById("giphy").innerHTML = giphy.URL;
//         } else if (this.readyState != 4) {
//             document.getElementById("giphy").innerHTML = "LOADING...";
//         } else {
//             document.getElementById("giphy").innerHTML = "Something went wrong...";
//         }
//     }
//     ajax.open("GET", "https://random.dog/woof.json", true);
//     ajax.send();
// }

// document.getElementById("giphy").addEventListener('click', getGiphy);

function getGiphy() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let giphy = JSON.parse(this.responseText);

            // I believe this object that you have called giphy does not have a "giphy" key. I'm pretty sure the key is called "url" meaning you should have giphy.url
            document.getElementById("giphy") = giphy.URL;
            // But also, I'mprety sure you don't want the url to be the innerHTML. We did an example on how to set an attribute on a tag before

        } else if (this.readyState != 4) {
            document.getElementById("giphy").innerHTML = "LOADING...";
        } else {
            document.getElementById("giphy").innerHTML = "Something went wrong...";
        }
    }

    // Here, the address of the API is actually "https://random.dog/woof.json" You have the address of a gif here
    ajax.open("GET", "https://random.dog/woof.json", true);
    ajax.send();
}

// The second argument to the addEventListener needs to be the NAME of the FUNCTION you want to call.
document.getElementById("giphy").addEventListener('click', getGiphy());