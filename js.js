const images = [
  { src: "image1.jpg", caption: "Artwork 1" },
  { src: "image2.jpg", caption: "Artwork 2" },
  { src: "visionFront.jpg", caption: "Artwork 3" },
  { src: "visionBack.jpg", caption: "Artwork 4" },
  { src: "visionDTFback.jpg", caption: "Artwork 4" },
];

// Get the modal
const payModal = document.getElementById("payModal");

// Get the button that opens the modal
const payButton = document.querySelector(".pay-button");

// Function to open the modal
payButton.onclick = function () {
  payModal.style.display = "block";
};

// Function to close the modal
function closePayModal() {
  payModal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  if (event.target === payModal) {
    payModal.style.display = "none";
  }
};

function openModal(index) {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
  showSlide(index);
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function changeSlide(direction) {
  currentSlide += direction;
  const totalSlides = Math.ceil(images.length / 2);

  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 2;

  showSlide(currentSlide);
}

function showSlide(index) {
  const modalImage1 = document.getElementById("modalImage1");
  const modalImage2 = document.getElementById("modalImage2");
  const caption1 = document.getElementById("caption1");
  const caption2 = document.getElementById("caption2");

  const firstImageIndex = index * 2;
  const secondImageIndex = firstImageIndex + 1;

  modalImage1.style.opacity = 0;
  modalImage2.style.opacity = 0;

  setTimeout(() => {
    modalImage1.src = images[firstImageIndex].src;
    caption1.textContent = images[firstImageIndex].caption;

    if (secondImageIndex < images.length) {
      modalImage2.src = images[secondImageIndex].src;
      caption2.textContent = images[secondImageIndex].caption;
      modalImage2.style.display = "block";
    } else {
      modalImage2.style.display = "none";
    }

    modalImage1.style.opacity = 1;
    modalImage2.style.opacity = 1;
  }, 300);
}
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// Set up the Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static("public"));

// Handle client connections
io.on("connection", (socket) => {
  console.log("New client connected");

  // Listen for events from the client
  socket.on("clientEvent", (data) => {
    console.log("Client Event:", data);
  });

  // Send an update to the client
  socket.emit("galleryUpdate", { message: "Gallery has been updated" });

  // Handle disconnections
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
const port = 3000;
server.listen(port, () => console.log(`Server running on port ${port}`));
