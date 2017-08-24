import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { System } from './system';
import { Equation } from './equation';

var Guppy = (window as any).Guppy;
var $ = (window as any).$;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  ngOnInit() {
    Guppy.init_symbols(["https://cdn.rawgit.com/daniel3735928559/guppy/24d744fd/sym/symbols.json"]);
  }
  ngAfterViewChecked() {
    $('.equation-container').each((i, e) => {
      if (!$(e).data('has-guppy')) {
        console.log('Guppy init', e);
        new Guppy(e.id);
        $(e).data('has-guppy', true);
      }
    });
  }

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
