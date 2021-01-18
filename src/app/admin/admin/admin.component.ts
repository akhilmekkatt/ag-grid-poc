import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {



  constructor(
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log(heroId);
  }

}
