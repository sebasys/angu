import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.paramMap.get('id'));
  }
}
