import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRouter.snapshot.paramMap.get('id'));
  }

  redirect() {
    console.log('redireccionando');
    this.router.navigate(['/first-component', { id: 'sebastian' }]);
  }
}
