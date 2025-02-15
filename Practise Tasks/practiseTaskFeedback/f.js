function submitFeedback() {
    // Get input values
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperince').value; // Get experience input

    // Display alert message
    alert('Thank you for your valuable feedback');

    // Display user feedback information
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperienceDisplay').innerText = experience; // Display experience

    // Make user info section visible
    document.getElementById('userInfo').style.display = 'block';
}

// Attach event listener to the submit button
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Allow submitting feedback with the "Enter" key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
