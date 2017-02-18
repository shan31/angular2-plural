import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `<div class="container">
    <shan-products></shan-products>
     <h1>Angular2: Getting Started</h1>
     </div>`
})
// @Component({
//     selector: 'shan',
//     template: `
//     <div class='container text-center'></div>
//     `
// })
export class AppComponent {
    pageTitle: string = 'My First Code';
}
