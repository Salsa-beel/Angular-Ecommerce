import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-OneProduct',
  templateUrl: './OneProduct.component.html',
  styleUrls: ['./OneProduct.component.css']
})
export class OneProductComponent implements OnInit {

  @Input() data :any = {}
  @Output() item =  new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.item.emit(this.data)
    console.log(this.data)
  }

}
