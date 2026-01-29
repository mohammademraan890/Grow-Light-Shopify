window.showToast = (text, type = "success") => {
  let backgroundColor;

  switch (type) {
    case "success":
      backgroundColor = "#006A2E"; // green
      break;
    case "error":
      backgroundColor = "#FF4C4C"; // red
      break;
    case "info":
      backgroundColor = "#2D9CDB"; // blue
      break;
    case "warning":
      backgroundColor = "#F2C94C"; // yellow
      break;
    default:
      backgroundColor = "#333"; // default dark
  }

  Toastify({
    text: text,
    duration: 3000,
    // close: true,
    position: "center",
    stopOnFocus: true,
    style: {
      background: backgroundColor,
      fontFamily: "var(--font-primary)",
    },
  }).showToast();
};