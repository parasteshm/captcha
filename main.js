document.addEventListener("DOMContentLoaded", function() {
    const captchaTextBox = document.querySelector(".captcha_box input");
    const refreshButton = document.querySelector(".refresh_button");
    const captchaInputBox = document.querySelector(".captcha_input input");
    const submitButton = document.querySelector(".button button"); 
    const messageBox = document.querySelector(".message");

    let captchaText = null;

    const generateCaptcha = () => {
        const randomString = Math.random().toString(36).substring(2, 7);
        const randomStringArray = randomString.split("");
        const changeString = randomStringArray.map(char => Math.random() > 0.5 ? char.toUpperCase() : char);
        captchaText = changeString.join("");
        captchaTextBox.value = captchaText;
    };

    const refreshBtnClick = () => {
        generateCaptcha();
        messageBox.style.display = "none";
        submitButton.parentElement.classList.add("disabled");
        captchaInputBox.value = "";
    };

    const captchakeyUpValidate = () => {
        if (captchaInputBox.value.trim() === captchaText) {
            submitButton.parentElement.classList.remove("disabled");
            messageBox.style.display = "block";
        } else {
            submitButton.parentElement.classList.add("disabled");
            messageBox.style.display = "none";
        }
    };

    refreshButton.addEventListener("click", refreshBtnClick);
    captchaInputBox.addEventListener("keyup", captchakeyUpValidate);

    generateCaptcha();
});
