import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { Store } from '@ngrx/store';
import { gridListLoadActions } from './state/grid-list.actions';
import { selectGridImages } from './state/grid-list.selectors';

@Component({
  selector: 'app-grid-list',
  standalone: true,
  imports: [MatGridListModule, MatButtonModule, CommonModule],
  providers: [],
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss',
})
export class GridListComponent implements OnInit {
  gridListData = this.store.selectSignal(selectGridImages);

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(gridListLoadActions.loadData({}));
  }
}
