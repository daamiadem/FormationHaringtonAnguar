import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  @Output() confirmed = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }
  confirmDelete() {
    this.confirmed.emit(true);
  }

}
