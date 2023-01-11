import { LitElement, html } from 'lit';

export class WeatherDetails extends LitElement {

  render() {
    return html`
      <h1> Weather Details </h1>
    `;
  }
}

customElements.define('weather-details', WeatherDetails);
