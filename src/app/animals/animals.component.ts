import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  public animal: string;

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    //this.animal = this.route.snapshot.paramMap.get("animal");
    this.route.paramMap.subscribe(params => {
      this.animal = params.get("animal")
    });
  }

}
