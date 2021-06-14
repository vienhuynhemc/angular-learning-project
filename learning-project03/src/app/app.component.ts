import { TestService } from './test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learning-project03';

  constructor(private test: TestService) {

  }
  ngOnInit(): void {
    this.test.getData().subscribe((data)=>{
      console.log(data);
    });
  }
}
