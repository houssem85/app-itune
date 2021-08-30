import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { ItuneListService } from "../shared/itune_music.service";
import { Music } from "../shared/music";

@Component({
  selector: "app-music",
  templateUrl: "./music.component.html",
  styleUrls: ["./music.component.css"],
})
export class MusicComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public itunemusicservice: ItuneListService
  ) {
    this.route.params.subscribe((parames) => {
      if (parames["musicId"]) {
        this.getMusic(parames["musicId"]);
      }
    });
  }

  music: Music;

  getMusic(musicId: string) {
    this.itunemusicservice
      .retrieveBook(musicId)
      .pipe(
        map((data) => {
          const res: any = data;
          console.log(res.results);
          return res.results ? res.results : [];
        })
      )
      .subscribe((music) => (this.music = music));
  }

  ngOnInit() {}
}
