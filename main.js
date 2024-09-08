// Grab form elements
var form = document.getElementById("resume-form");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var profilePicInput = document.getElementById("profilePic");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var skillsInput = document.getElementById("skills");
// Grab display elements
var resumeDisplay = document.getElementById("resume-display");
var nameDisplay = document.getElementById("name-display");
var emailDisplay = document.getElementById("email-display");
var phoneDisplay = document.getElementById("phone-display");
var profilePicDisplay = document.getElementById("profile-pic-display");
var educationDisplay = document.getElementById("education-display");
var experienceDisplay = document.getElementById("experience-display");
var skillsDisplay = document.getElementById("skills-display");
// Event listener for form submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Validate inputs
    if (!nameInput.value || !emailInput.value || !phoneInput.value || !educationInput.value || !experienceInput.value || !skillsInput.value) {
        alert("Please fill in all fields");
        return;
    }
    // Populate resume
    nameDisplay.textContent = nameInput.value;
    emailDisplay.textContent = emailInput.value;
    phoneDisplay.textContent = phoneInput.value;
    // Display profile picture
    var reader = new FileReader();
    reader.onload = function () {
        profilePicDisplay.src = reader.result;
    };
    if ((_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a.length) {
        reader.readAsDataURL(profilePicInput.files[0]);
    }
    // Set education and experience
    educationDisplay.textContent = educationInput.value;
    experienceDisplay.textContent = experienceInput.value;
    // Parse and set skills
    skillsDisplay.innerHTML = "";
    var skills = skillsInput.value.split(",").map(function (skill) { return skill.trim(); });
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        skillsDisplay.appendChild(li);
    });
    // Show the resume section
    resumeDisplay.style.display = "block";
});
