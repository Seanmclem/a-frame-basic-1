import { add, subtract } from './math.js';

class DemoComponent extends HTMLElement {
    constructor(){
        super();
debugger;
        const shadow = this.attachShadow({mode: 'open'});
        const template = document.createElement('template');

        //let html = h => h;  html
        template.innerHTML = `
            <div class="">
                <div> 
                    five minus one equals = ${subtract(5,1)}
                </div>
            <div>
                <a rel="noopener" target="_blank" href="http://www.google.com">
                    Click ME!
                </a>
            </div>
        `;


        const templateConetent = template.content.cloneNode(true);

        // Append it to the shadow root
        shadow.appendChild(templateConetent);

    }
}

customElements.define('demo-component', DemoComponent);