document.addEventListener('DOMContentLoaded', function () {
  const videoContainer = document.querySelector('.video');
  const hiddenVideo = document.querySelector('.hidden-video');

  videoContainer.addEventListener('mouseenter', () => {
    hiddenVideo.play(); // Play the video on hover
  });

  videoContainer.addEventListener('mouseleave', () => {
    hiddenVideo.pause(); // Pause the video when the mouse leaves
  });
});