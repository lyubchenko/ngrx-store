import { Component, OnInit, Input, AfterViewInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() columnsToDisplay: string[];
  @Input() columnsToDisplayRow: string[];
  @Input() url: string;
  @Input() pageSize = 5;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private rowDataPrivate;
  @Input()
  set rowData(value) {
    this.rowDataPrivate = new MatTableDataSource(value);
  }
  get rowData() {
    return this.rowDataPrivate;
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.rowDataPrivate.paginator = this.paginator;
  }

  openUrl($event, element): void {
    if (!$event.target.hasAttribute('href')) {
      $event.preventDefault();
      this.router.navigateByUrl(this.url + element.id);
    }
  }

}
