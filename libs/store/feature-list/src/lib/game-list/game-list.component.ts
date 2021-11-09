/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { GamesService } from '@bghoard/store/data-access-games';
import '@bghoard/shared/ui-tile';

@Component({
  selector: 'bghoard-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games$ = this.gamesService.games$;
  constructor(private gamesService: GamesService) {}

  ngOnInit() {}
}
