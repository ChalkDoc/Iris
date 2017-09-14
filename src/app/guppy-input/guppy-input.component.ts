import { Component, Output, EventEmitter, AfterViewInit, ViewChild, NgZone } from '@angular/core';

var GuppyOSK = (window as any).GuppyOSK;
var Guppy = (window as any).Guppy;
var $ = (window as any).$;

@Component({
  selector: 'guppy-input',
  templateUrl: './guppy-input.component.html',
  styleUrls: ['./guppy-input.component.css']
})
export class GuppyInputComponent implements AfterViewInit {
  @ViewChild('guppyContainer') guppyContainer;

  // change event is emitted every time the content of equations changes
  @Output() change = new EventEmitter();

  // clickRemove event is emitted when user clicks delete button
  @Output() clickRemove = new EventEmitter();
  guppy;

  // use ngZone for changes to be detected
  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    // attach guppy editor to newly created guppy-input element
    this.guppy = new Guppy(this.guppyContainer.nativeElement, {
      events: {
        change: () => {
          if (this.guppy) {
            this.ngZone.run(() => {
              this.change.emit (this.guppy.backend.get_content("text"))
            });
          }
        },
        ready: () => {
          // workaround for Guppy bug
          Guppy.ready = true;
        }
      }
    });
    // attach on-screen keyboard to newly created guppy editor
    new GuppyOSK();
  }

}
