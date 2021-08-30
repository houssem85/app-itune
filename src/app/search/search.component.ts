import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ItuneListService } from "../shared/itune_music.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  constructor(public itunemusicservice: ItuneListService) {}

  ngOnInit() {}

  onSubmit(search) {
    this.itunemusicservice.searchMusics(search.search);
  }
}
