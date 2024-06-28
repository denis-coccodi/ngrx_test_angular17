import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  effect,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  tableLoadActions,
  tableManagementActions,
} from './state/table.actions';
import { selectPeriodicElements } from './state/table.selectors';
import { PeriodicElement } from './state/table.state';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatButtonModule],
  providers: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tableData = this.store.selectSignal(selectPeriodicElements);
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private store: Store
  ) {
    effect(() => {
      this.dataSource.data = this.tableData();
    });
  }

  @ViewChild(MatSort) sort = new MatSort();

  ngOnInit(): void {
    this.store.dispatch(tableLoadActions.loadData({ elementId: '0' }));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  removeElement = (index = 0) => {
    const chosenElement = this.dataSource?.data[index];
    const chosenId = chosenElement && { elementId: chosenElement?.id };
    if (chosenId) {
      this.store.dispatch(tableManagementActions.removeElement(chosenId));
    }
  };

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
