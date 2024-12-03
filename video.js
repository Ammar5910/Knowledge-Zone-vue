document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("introVideo");
    const mainContent = document.querySelector(".main-content");
  
    // Automatically remove video and skip button after playback
    video.addEventListener("ended", () => {
      hideIntroSection();
    });
  
    // Create and style the Skip Intro button
    const skipButton = document.createElement("button");
    skipButton.textContent = "Skip Intro";
    skipButton.style.cssText = `
      position: absolute;
      bottom: 10px;
      right: 10px;
      padding: 10px 20px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      cursor: pointer;
      z-index: 3;
    `;
    document.body.appendChild(skipButton);
  
    // Add click event listener to the Skip Intro button
    skipButton.addEventListener("click", () => {
      hideIntroSection();
    });
  
    // Function to hide the intro section and remove the button
    function hideIntroSection() {
      const introSection = video.parentElement;
      introSection.style.display = "none"; // Hide the intro section
      skipButton.remove(); // Remove the Skip Intro button
      mainContent.classList.remove("hidden"); // Show the main content
    }
  });
  