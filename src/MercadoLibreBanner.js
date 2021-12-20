import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './MercadoLibreBanner-styles.js';

import "@bbva-web-components/bbva-web-carousel-default/bbva-web-carousel-default.js";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<mercado-libre-banner></mercado-libre-banner>
```

##styling-doc

@customElement mercado-libre-banner
*/
export class MercadoLibreBanner extends LitElement {
  static get is() {
    return 'mercado-libre-banner';
  }

  // Declare properties
  static get properties() {
    return {
      banners: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.banners = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('mercado-libre-banner-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="region">
      <div class="zone">
     
      <bbva-web-carousel-default aria-label="Slider">
      ${this.banners.map((i) => html `
      <bbva-web-carousel-default-slide>
            <div class="content">
              <img src="${i}">
                
            </div>
          </bbva-web-carousel-default-slide>
      
      `)};
       
    </bbva-web-carousel-default>
    
  </div>
</div>
    `;
  }
}
