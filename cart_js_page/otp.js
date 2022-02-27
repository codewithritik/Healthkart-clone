document.querySelector("form").addEventListener("submit", subfun);


function subfun(event) {
    event.preventDefault()
    var a = document.querySelector("#a").value
    var b = document.querySelector("#b").value
    var c = document.querySelector("#c").value
    var d = document.querySelector("#d").value;

    if (a == 1 && b == 2 && c == 3 && d == 4) {
        alert("Congratulation! your varification is successful");
        window.location.href = "index.html";
    } else {
        alert("wrong otp")
    }

}