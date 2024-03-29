// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

import handleRequest from "~/entry.server";

// the link to your model provided by Teachable Machine export panel
const URL = "https://teachablemachine.withgoogle.com/models/o3s_eV74w/";

let model, webcam, labelContainer, maxPredictions;
let detected_text = "";

let detected = null;
let chatgpt_p = null;
let detectedcounter = 0


// Load the image model and setup the webcam
export async function initgoo() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    // Convenience function to setup a webcam
    const flip = true; // whether to flip the webcam
    webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
    }

}

export async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
export async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    
    if (detected === null) {
        detected = document.getElementById('detected-p');
    }

    if(chatgpt_p === null){
        chatgpt_p = document.getElementById('chatgpt-p');
    }

    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
        if (prediction[i].probability.toFixed(2) == 1){
            detectedcounter++

            if(detectedcounter < 5){
                detected.innerHTML = `Detected: ${prediction[i].className}`
                // chatgpt_p.innerHTML = `Chat GPT: <button type="button" onClick={handleDetected()}>Click here to generate chat</button>`
                detected_text = `${prediction[i].className}`

                //break/pause the loop
                detected = null
                detected.innerHTML
            }
        }
    }
}

export function exportDetected(){
    if (detected_text == ""){
        return {
            status: false,
            detected: ""
        }
    }

    return {
        status: true,
        detected: detected_text
    }
}