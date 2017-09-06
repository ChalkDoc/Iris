import { Component, OnInit } from '@angular/core';
import { System } from './system';
import { Equation } from './equation';

declare let d3: any;
declare let functionPlot: any;

var Guppy = (window as any).Guppy;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {

    console.log( 'Onit' )
    let ele = d3.selectAll('p')

    ele.style('background-color', 'red')

    functionPlot({
      target: '#quadratic',
      data:[{
        fn: 'x=1'
      }]
    })
    
    Guppy.init_symbols(["https://cdn.rawgit.com/daniel3735928559/guppy/24d744fd/sym/symbols.json"]);
  }

  system = new System ([
    new Equation ('')
  ]);

// don't remove if only one euqation
  remove(i) {
    if (this.system.equations.length < 2) {
      return
    }
    this.system.equations.splice(i,1);
  }
  onEnter(i) {
    this.system.equations.splice(i+1,0,new Equation(''));
    setTimeout(() => this.focus(i+1),1);
  }
  focus(i) {
    var element = document.querySelectorAll(".equation-container")[i] as HTMLElement;
    if (element) {
        element.focus();
    }
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
    if (i == 0 || this.system.equations[i].input.trim() != '')
      return;
    this.system.equations.splice(i,1);
    setTimeout(() => this.focus(i-1),1);
  }

}
