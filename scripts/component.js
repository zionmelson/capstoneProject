export default class CityCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["location", "website", "image", "costs"];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;

    this[property] = newValue;

    if (property === "location") {
      this.location.textContent = newValue;
    }
    if (property === "website") {
      this.website.textContent = newValue;
      this.website.href = newValue;
    }
    if (property === "image") {
      this.image.src = newValue;
    }
    if (property === "description") {
      this.description.textContent = newValue;
    }
    if (property === "airport") {
      this.airport.textContent = newValue;
    }
    if (property === "costs") {
      this.costs.textContent = newValue;
    }
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document
      .getElementById("output-template")
      .content.cloneNode(true);

    shadow.append(template);

    this.location = this.shadowRoot.querySelector("#location");
    this.website = this.shadowRoot.querySelector("#website");
    this.description = this.shadowRoot.querySelector("#airport-description");
    this.airport = this.shadowRoot.querySelector("#airport-name");
    this.image = this.shadowRoot.querySelector("#airport-image");
    this.costs = this.shadowRoot.querySelector(".costs");

    const location = this.getAttribute("location");
    if (location) {
      this.location.textContent = location;
    }

    const website = this.getAttribute("website");
    if (website) {
      this.website.href = website;
      this.website.textContent = website;
    }

    const image = this.getAttribute("image");
    if (image) {
      this.image.src = image;
    }

    const description = this.getAttribute("description");
    if (description) {
      this.description.textContent = description;
    }

    const airport = this.getAttribute("airport-name");
    if (airport) {
      this.airport.textContent = airport;
    }

    const costs = this.getAttribute("costs");
    if (costs) {
      this.costs.textContent = costs;
    }
  }
}
