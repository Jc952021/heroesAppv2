import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [],
})
export class NewPageComponent {
  publishers = [
    { id: 'DC Comics', option: 'DC-Comics' },
    { id: 'Marvel Comics', option: 'Marvel-Comics' },
  ];
}
