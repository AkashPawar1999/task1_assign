import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ngrx_task';

  keyValuePairs: { key: string, value: string }[] = [];
  newKey: string = '';
  newValue: string = '';
  key1: string = '';
  key2: string = '';
  
  addKeyValuePair() {
    this.keyValuePairs.push({ key: this.newKey, value: this.newValue });
    this.newKey = '';
    this.newValue = '';
  }

  concatValues(): void {
    const value1 = this.keyValuePairs.find(item => item.key === this.key1)?.value || '';
    const value2 = this.keyValuePairs.find(item => item.key === this.key2)?.value || '';
    const newKey = this.key1 + this.key2;
    const newValue = value1 + value2;
    this.keyValuePairs.push({ key: newKey, value: newValue });
    this.key1 = '';
    this.key2 = '';
  }
  
  ngOnInit() {}

}
