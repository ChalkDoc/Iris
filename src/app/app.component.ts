import { Component, OnInit } from '@angular/core';
import { System } from './system';
import { Equation } from './equation';

declare let d3: any;
declare let functionPlot: any;

var Guppy = (window as any).Guppy;
var $ = (window as any).$;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // data model
  system = new System ([
    new Equation ('')
  ]);

  ngOnInit() {
    Guppy.init_symbols(["/assets/symbols.js"]);

    // display empty function plot canvas
    functionPlot({
      target: '#quadratic',
      data:[]
    });
  }

  // remove button click handler
  remove(i) {
    // don't remove if only one euqation
    if (this.system.equations.length < 2) {
      return
    }
    this.system.equations.splice(i,1);
    setTimeout(() => this.drawFunctions(), 1);
  }

  // enter key pressed hander
  onEnter(i) {
    this.system.equations.splice(i+1,0,new Equation(''));
    setTimeout(() => this.focus(i+1),1);
  }

  // add button click handler
  onAdd() {
    this.system.equations.push(new Equation(''));
    setTimeout(() => this.focus(this.system.equations.length-1),1);
  }

  // arrow up key pressed handler
  onArrowUp(i) {
    this.system.equations[i]
    console.log('arrowup')
    setTimeout(() => this.focus(i-1),1);
  }

  // arrow down key pressed handler
  onArrowDown(i) {
    this.system.equations[i]
    setTimeout(() => this.focus(i+1),1);
  }

  // backspace key pressed handler
  onDelete(i) {
    if (i == 0 || this.system.equations[i].input.trim() != '')
      return;
    this.system.equations.splice(i,1);
    setTimeout(() => this.focus(i-1),1);
    setTimeout(() => this.drawFunctions(), 1);
  }

  // equations content changed event handler
  change(i, newInput) {
    this.system.equations[i].input = newInput;
    setTimeout(() => this.drawFunctions(), 1);
  }

  // makes i-th equation focused
  focus(i) {
    var element = document.querySelectorAll(".equation-container")[i] as HTMLElement;
    if (element && Guppy.instances[element.id]) {
      var guppy = Guppy.instances[element.id];
      this.unfocusAll();
      guppy.activate();
    }
  }

  // remove focus from all equations
  unfocusAll() {
    $.each(Guppy.instances, (i, x) => x.deactivate());
  }

  // draw current equations
  drawFunctions() {
    var data = $.map(this.system.equations, (x) => ({
      fn: x.input.trim()
    }));
    $('#quadratic').empty();
    functionPlot({
      target: '#quadratic',
      data: data
    });
  }
}
