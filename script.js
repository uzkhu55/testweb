document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("intro-video");
  const helloText = document.getElementById("hello-text");
  const rejectButton = document.getElementById("reject-button");
  // const video = document.getElementById("intro-video");
  const button = document.getElementById("my-button");

  // video.addEventListener("ended", function () {
  //   video.classList.add("hidden"); // Apply fade out and scale-up effect

  //   // Wait for the transition to complete before changing the position
  //   setTimeout(() => {
  //     video.classList.add("static"); // Change to static positioning
  //   }, 2000); // Timeout should match the duration of the opacity transition
  // });

  // video.addEventListener("ended", function () {
  //   button.style.display = "flex"; // Show the button when the video ends
  // });

  rejectButton.addEventListener("click", function () {
    // Hide the button after it's clicked
    rejectButton.style.display = "none";

    // Play the video with sound
    videoElement.muted = false;
    videoElement.play();

    // Fade out the video and fade in the text after 5 seconds
    setTimeout(function () {
      videoElement.style.opacity = "0"; // Fade out the video
      helloText.style.opacity = "1"; // Fade in the text

      // Optionally hide the video element after fade-out is complete
      setTimeout(function () {
        videoElement.style.display = "none"; // Hide video element to prevent interaction
      }, 1000); // Match this duration with the opacity transition time
    }, 5000); // 5000 milliseconds = 5 seconds
  });
});
