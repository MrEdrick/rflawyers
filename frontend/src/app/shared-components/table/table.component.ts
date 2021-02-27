import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnsTableDto } from './dto/table.dto';

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  @Input()
  columnsTableDto: ColumnsTableDto[] = [];

  displayedColumns: string[] = [];

  _dataSource = new MatTableDataSource<any>();

  _dataSourceChecked = new MatTableDataSource<any>();

  @Input()
  set dataSource(value: MatTableDataSource<any>) {
    if (this._dataSource) {
      this._dataSource = value;

      if (!this._dataSource.paginator) {
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  get dataSource(): MatTableDataSource<any> {
    return this._dataSource || null;
  }

  @Output()
  get dataSourceChecked(): MatTableDataSource<any> {
    return this._dataSourceChecked || null;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output()
  loadColumnsTable() {
    this.columnsTableDto.forEach(columnTableDto => {
      this.displayedColumns[this.displayedColumns.length] =
        columnTableDto.columnName;
    });
  }

  updateCheckedList(event, index) {
    if (event.checked) {
      this._dataSourceChecked
        .data[this._dataSourceChecked.data.length] = this._dataSource.data[index];
    } else {
      for (let i = 0; i < this._dataSourceChecked.data.length; i++) {
        if (this._dataSourceChecked.data[i].id === this._dataSource.data[index].id) {
          this._dataSourceChecked.data.splice(i, 1);
          i--;
        }
      }
    }
  }

  deleteRow(element) {
    this._dataSource.data = this._dataSource.data.filter(item => item !== element);
  }
}
