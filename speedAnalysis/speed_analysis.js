let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
 }

 
 function endTest() {
    const endTime = new Date().getTime();

    // Disable user input
    const userInputField = document.getElementById("userInput");
    userInputField.readOnly = true;

    // Calculate time elapsed
    const timeElapsed = (endTime - startTime) / 1000; // in seconds

    // Get user input
    const userTypedText = userInputField.value.trim();

    // Count words correctly using regex
    const typedWords = userTypedText.split(/\s+/).filter(word => word !== "").length;

    // Calculate words per minute (WPM)
    let wpm = 0;
    if (timeElapsed > 0 && typedWords > 0) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    document.getElementById("output").innerHTML = `
        <h2>Typing Test Results:</h2>
        <p><strong>Words Typed:</strong> ${typedWords}</p>
        <p><strong>Time Elapsed:</strong> ${timeElapsed.toFixed(2)} seconds</p>
        <p><strong>Words Per Minute (WPM):</strong> ${wpm}</p>
    `;

    // Reset the button
    const button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}
