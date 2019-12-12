import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-control-panel',
  templateUrl: './button-control-panel.component.html',
  styleUrls: ['./button-control-panel.component.css']
})
export class ButtonControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private toggleText: string = "Hide";
  private show: boolean = true;

  public onToggle(): void {
    this.show = !this.show;
    this.toggleText = this.show ? "Hidе" : "Show";
  }
  public autoCorrect: boolean = false;
  public value: number = 5;

  public onChange(value: number) {
    console.log(value);
  }

  public onFocus() {
    console.log('Focused');
  }

  public onBlur() {
    console.log('Blurred');
  }


}
