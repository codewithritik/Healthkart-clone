document.querySelector("form").addEventListener("submit", subfun)

function subfun(event) {
    event.preventDefault();
    alert("We send the OTP to your register mobile no")
    window.location.href = "otp.html"
}