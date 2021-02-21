const registerSw = () => {
  // Check if this browser supports service workers
  if ("serviceWorker" in navigator) {
    window.addEventListener(
      "load",
      () => {
        // Register actual service worker file
        const swPath = `${process.env.PUBLIC_URL}/sw.js`;
        navigator.serviceWorker.register(swPath).then((result) => {
          console.log(result);
        });
      },
      (err) => {
        console.log("Registration failed" + err);
      }
    );
  } else {
    console.log("Service worker is not supported in this browser");
  }
};

export default registerSw;
