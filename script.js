function analyzeCrop() {

    const crop = document.getElementById("crop").value;
    const stage = document.getElementById("stage").value;
    const symptoms = document.getElementById("symptoms").value;
    const aiPrompt = `
You are an agricultural crop health advisory assistant.

Crop: ${crop}
Growth Stage: ${stage}
Reported Symptoms: ${symptoms}

Provide a preliminary advisory with:
1. Possible concern
2. Risk level: Low, Moderate, or High
3. Why these symptoms may matter
4. Recommended actions
5. Prevention and monitoring advice

Do not claim a definitive diagnosis.
Use clear, simple language suitable for farmers.
`;

    if (crop === "" || stage === "" || symptoms.trim() === "") {
        alert("Please enter the crop, growth stage, and symptoms.");
        return;
    }
    const result = document.getElementById("result");

result.classList.remove("hidden");

result.querySelector("h2").textContent =
    "🤖 AI Analysis in Progress...";

document.getElementById("resultCrop").textContent = crop;
document.getElementById("resultStage").textContent = stage;

    document.getElementById("result").classList.remove("hidden");

    document.getElementById("resultCrop").textContent = crop;
    document.getElementById("resultStage").textContent = stage;
    setTimeout(() => {
    document
        .querySelector("#result h2")
        .textContent = "🌱 Crop Health Advisory";
}, 1200);

    let concern = "Possible pest or disease-related crop stress.";

const symptomText = symptoms.toLowerCase();

if (
    symptomText.includes("white spots") ||
    symptomText.includes("white patch")
) {
    concern = "Possible fungal or pest-related leaf stress.";
}

else if (
    symptomText.includes("curling") ||
    symptomText.includes("curled leaves")
) {
    concern = "Possible pest-related or environmental crop stress.";
}

else if (
    symptomText.includes("yellow") ||
    symptomText.includes("yellowing")
) {
    concern = "Possible nutrient, pest, or disease-related stress.";
}

else if (
    symptomText.includes("holes") ||
    symptomText.includes("eaten")
) {
    concern = "Possible insect or pest-related damage.";
}

let reason =
    "The reported symptoms may indicate stress affecting the crop. Similar symptoms can have different causes, so the crop should be monitored carefully.";

if (
    symptomText.includes("white spots") ||
    symptomText.includes("white patch")
) {
    reason =
        "White spots on leaves can be associated with fungal or pest-related stress. Checking nearby leaves can help determine whether the symptoms are spreading.";
}

else if (
    symptomText.includes("curling") ||
    symptomText.includes("curled leaves")
) {
    reason =
        "Leaf curling can be associated with pest activity, environmental stress, or other crop-health problems. Inspect the underside of leaves and monitor nearby plants.";
}

else if (
    symptomText.includes("yellow") ||
    symptomText.includes("yellowing")
) {
    reason =
        "Yellowing leaves can have several causes, including nutrient stress, pests, or disease. Monitoring the pattern and affected areas can help identify the cause.";
}

document
    .getElementById("reason")
    .textContent = reason;