export default class CityCard extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["location", "website", "image" /*, "flights", "attractions"*/];
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (property === "location") {
      if (this.location) {
        this.location.textContent = newValue;
      }
    }
    if (property === "website") {
      this.website.textContent = newValue;
      this.website.href = newValue;
    }
    if (property === "image") {
      this.image.src = newValue;
    }
    /*
    if (property === "flights") {
      this.flights.textContent = newValue;
    }
    if (property === "attractions") {
      this.attractions.textContent = newValue;
    }
    */
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    const template = document
      .getElementById("output-template")
      .content.cloneNode(true);

    shadow.append(template);

    this.location = this.shadowRoot.querySelector("#location");
    this.website = this.shadowRoot.querySelector("#website");
    this.image = this.shadowRoot.querySelector("#image");
    // this.flights = this.shadowRoot.querySelector("#flights")
    // this.attactions = this.shadowRoot.querySelector("#attractions")

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

    /*
    const flights = this.getAttribute("flights");
    if (flights) {
      this.flights.textContent = flights
    }

    const attractions = this.getAttribute("attractions");
    if (attractions) {
      this.attractions.textContent = attractions;
    }
    */
  }
}
