import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  text!: string;
  area!: string;
  arrBadWords: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }
  add(): void {
    if (this.text) {
      this.arrBadWords.push(this.text)
      this.text = '';
    }
  }
  reset(): void {
    this.arrBadWords.length = 0;
  }
  update(): void {
    if (this.area) {
      this.arrBadWords.forEach(el => {
        let reg = new RegExp(`\\b${el}\\b`, 'g');
        this.area = this.area.replace(reg, '!!!')
      })
    }
  }
}
