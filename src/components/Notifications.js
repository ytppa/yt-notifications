import Notification from "./Notification.js";

/**
 * Notifications container & processor
 * @param {} props
 * @param {Object[]} props.classNames - Array of strings - class names
 * that should be added to container element
 * @param {Object} props.style - Object with styling properties,
 * that should be attached to element as inline style properties.
 * ClassNames should be provided in camelCase format
 *
 */
class Notifications {
  constructor(props) {
    props = props || {};
    this.state = {
      classNames: props.classNames || [],
      items: [],
      style: props.style || null
    };

    this.render();
  }

  addNotification(props) {
    const { container } = this,
      newNotification = new Notification({
        container: container,
        ...props
      });

    this.state.items.push(newNotification);
  }

  get container() {
    if (this._container === undefined) {
      const { classNames, style } = this.state;
      let container = document.createElement("div");
      container.classList.add("yt-notifications", ...classNames);
      if (style !== null) {
        for (let [key, value] of Object.entries(style)) {
          container.style[key] = `${value}`;
        }
      }

      this._container = container;
    }

    return this._container;
  }

  render() {
    const container = this.container;
    document.body.appendChild(container);
  }
}

export default Notifications;
