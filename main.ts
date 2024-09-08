// Grab form elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const profilePicInput = document.getElementById("profilePic") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;

// Grab display elements
const resumeDisplay = document.getElementById("resume-display") as HTMLElement;
const nameDisplay = document.getElementById("name-display") as HTMLElement;
const emailDisplay = document.getElementById("email-display") as HTMLElement;
const phoneDisplay = document.getElementById("phone-display") as HTMLElement;
const profilePicDisplay = document.getElementById("profile-pic-display") as HTMLImageElement;
const educationDisplay = document.getElementById("education-display") as HTMLElement;
const experienceDisplay = document.getElementById("experience-display") as HTMLElement;
const skillsDisplay = document.getElementById("skills-display") as HTMLUListElement;

// Event listener for form submission
form.addEventListener("submit", (event: Event) => {
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
    const reader = new FileReader();
    reader.onload = () => {
        profilePicDisplay.src = reader.result as string;
    };
    if (profilePicInput.files?.length) {
        reader.readAsDataURL(profilePicInput.files[0]);
    }

    // Set education and experience
    educationDisplay.textContent = educationInput.value;
    experienceDisplay.textContent = experienceInput.value;

    // Parse and set skills
    skillsDisplay.innerHTML = "";
    const skills = skillsInput.value.split(",").map(skill => skill.trim());
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsDisplay.appendChild(li);
    });

    // Show the resume section
    resumeDisplay.style.display = "block";
});
