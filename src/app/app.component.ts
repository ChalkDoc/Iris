import { Component } from '@angular/core';
import { System} from './system';
import { Equation} from './equation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  system = new System ([
    new Equation ('')
  ]);

  remove(i) {
    this.system.equations.splice(i,1);
  }
  onEnter(i) {
    this.system.equations.splice(i+1,0,new Equation(''));
    setTimeout(() => this.focus(i+1),1);
  }
  focus(i) {
    var element = document.querySelectorAll(".equation-container")[i] as HTMLElement;
    element.focus();
  }

  onArrowUp(i) {
    this.system.equations[i]
    setTimeout(() => this.focus(i-1),1);
  }

  onArrowDown(i) {
    this.system.equations[i]
    setTimeout(() => this.focus(i+1),1);
  }

  onDelete(i){
    if (i == 0 || this.system.equations[i].input != '')
      return;
    this.system.equations.splice(i,1);
    setTimeout(() => this.focus(i-1),1);
  }

}
