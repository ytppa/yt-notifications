/**
 * Single notification item
 * @param {Object} props
 * @param {boolean} props.isStatic - If notification should be closed in time
 * @param {STRING} props.type - INFO/WARN/ERROR/SUCCESS
 * @param {boolean} props.closable - If notification could be closed by clicking on a `close` buttton
 * @param {boolean} props.text - Inner message
 */
class Notification {
  constructor(props) {
    props = props || {};
    this.state = {
      isStatic: props.isStatic || false,
      type: props.type || "INFO", // INFO, WARN, ERROR, SUCCESS
      closable: props.closable || false,
      text: props.text || ""
    };
    this.close = this.close.bind(this);
    this.render(props.container);
  }

  /**
   * Closing
   */
  close() {
    console.info("close");
  }

  get element() {
    if (this._element === undefined) {
      const { type, text, isStatic, closable } = this.state;
      let classNames = ["yt-notification"];

      this._element = document.createElement("div");

      classNames.push(`yt-notification--type-${type.toLowerCase()}`);
      if (isStatic) classNames.push(`yt-notification--is-static`);
      this._element.classList.add(...classNames);
      this._element.innerHTML = text;

      if (closable) {
        const closeButton = document.createElement("button");
        closeButton.classList.add("yt-notification--close-button");
        closeButton.addEventListener(this.close());
        this._element.appendChild(closeButton);
      }
    }

    return this._element;
  }

  /**
   * Rendering notification onto page
   * @param {HTMLElement} aContainer - Container for contification items, created in Notifications class
   */
  render(aContainer) {
    if (!!aContainer) {
      aContainer.appendChild(this.element);
    }
  }
}

export default Notification;
