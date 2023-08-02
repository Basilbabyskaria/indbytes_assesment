import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface apidata {
  flag: string;
  independent: boolean;
  name: string;
  region: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getData();
  }
  filter_key = 'All';
  card_data: any;
  getData = () => {
    this.http
      .get('https://restcountries.com/v2/all?fields=name,region,flag')
      .subscribe((data) => {
        // console.log(data);

        this.card_data = data;
      });
  };
  handle_filter = (event: any) => {
    this.filter_key = event.target.textContent;
  };
}
