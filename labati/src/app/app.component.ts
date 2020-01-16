import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labati';
  coso = new Array<string>();

spamma(inutile: HTMLInputElement, spam: HTMLInputElement):boolean {
console.log(inutile.value + "-" + spam.value);
  let cont =Number(spam.value);
this.coso = new Array<string>();
for (let index = 0; index < cont; index++) {
this.coso.push(1+index +" "+ inutile.value);

}
console.log(this.coso);
return false;
}
}

