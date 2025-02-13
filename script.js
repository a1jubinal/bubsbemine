let step = 0;

function nextStep(answer) {
    const questionText = document.getElementById("question");
    const image = document.getElementById("mainImage");

    if (step === 0 && answer === "yes") {
        questionText.innerText = "Yay! What's your favorite Valentine's candy?";
        image.src = "https://via.placeholder.com/300/ffb6c1"; // Replace with a cute image
        step++;
    } else if (step === 1 && answer === "yes") {
        questionText.innerText = "Great choice! Last question: Fancy dinner or movie night?";
        image.src = "https://via.placeholder.com/300/ff69b4"; // Replace with another image
        step++;
    } else if (answer === "no") {
        questionText.innerText = "Aww, maybe next time! 💔";
        image.src = "https://via.placeholder.com/300/grey";
    }
}
