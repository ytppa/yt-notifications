import Notifications from "./components/Notifications.js";
import config from "./config.js";
import "./styles.css";

(function() {
  let notifications = new Notifications({
    classNames: [`yt-${config.screenPosition.toLowerCase()}`],
    ...config
  });

  notifications.addNotification({
    type: "ERROR",
    text: "Error happend!",
    isStatic: true
  });

  notifications.addNotification({
    text: "Some text!"
  });
})();
