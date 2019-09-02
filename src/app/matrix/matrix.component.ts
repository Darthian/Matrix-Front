import { Component, OnInit } from '@angular/core';
import { MatrixService } from '../matrix.service';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css']
})
export class MatrixComponent implements OnInit {

  matrix: any;

  constructor(
    public matrixService: MatrixService
  ) { }

  ngOnInit() {
  }

  reset() {
    this.matrix = Array<string>();
  }

  getMatrix() {
    const payload = {
      commandName: [
        '2',
        '4 5',
        'UPDATE 2 2 2 4',
        'QUERY 1 1 1 3 3 3',
        'UPDATE 1 1 1 23',
        'QUERY 2 2 2 4 4 4',
        'QUERY 1 1 1 3 3 3',
        '2 4',
        'UPDATE 2 2 2 1',
        'QUERY 1 1 1 1 1 1',
        'QUERY 1 1 1 2 2 2',
        'QUERY 2 2 2 2 2 2'
      ]
    };

    this.matrixService.post('http://localhost:8080', '/matrix', payload)
      .subscribe(
        data => {
          console.log(data);
          this.matrix = data;
        },
        err => {
          console.log(err);
        }
      );
  }
}
