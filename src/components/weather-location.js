import { LitElement, html } from 'lit';

export class WeatherLocation extends LitElement {

  render() {
    return html`
      <h1> Weather Location </h1>
    `;
  }
}

customElements.define('weather-location', WeatherLocation);
