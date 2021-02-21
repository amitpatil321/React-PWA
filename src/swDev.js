const registerSw = () => {
  // Check if this browser supports service workers
  if ("serviceWorker" in navigator) {
    window.addEventListener(
      "load",
      () => {
        // Register actual service worker file
        const swPath = `${process.env.PUBLIC_URL}/sw.js`;
        navigator.serviceWorker.register(swPath).then((response) => {
          console.log(response);
        });
      },
      (err) => {
        console.log("Registration failed" + err);
      }
    );
  } else {
    console.log("Service worker is not supported in this browser");
  }

  /*

  function determineAppServerKey() {
    const vapidPublicKey =
      "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response : ", response);

    return response.pushManager.getSubscription().then(function (subscription) {
      response.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: determineAppServerKey(),
      });
    });
  });
*/
};

export default registerSw;
