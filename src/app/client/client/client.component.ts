import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  public todoDilist = [];
  public readonly readOnlyArr = [1, 2, 3];
  public readonly readOnlyVar = 1;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //this.readOnlyArr = [123];
    const constVar = 1;

    console.dir(this.clossure())
    const subsription = this.dataService.getTodoList().then(res => {
      this.todoDilist = res;
      //console.log(res)
    }, err => {

    })

    var array = [1, 2, 3, 4, 5];
    let arrSlice = array.slice(1, 3);
    //array.splice(2);
    console.log(arrSlice);
  }

  clossure = () => {
    let i = 100;
    let j = 100;

    return () => {
      console.log(i);
      console.log(j);

    }
  }


}
