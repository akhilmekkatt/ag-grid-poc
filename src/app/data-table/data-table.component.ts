import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { AllCommunityModules, Module } from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  public todoDilist: Array<any> = null;


  public modules: Module[] = AllCommunityModules;
  public columnDefs;
  public rowData: Array<any> = [];

  public defaultColDef;
  public defaultColGroupDef;
  public columnTypes;

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {


    this.columnDefs = [
      {
        headerName: 'Athlete',
        field: 'athlete',
      },
      {
        headerName: 'Sport',
        field: 'sport',
      },
      {
        headerName: 'Age',
        field: 'age',
        type: 'numberColumn',
      },
      {
        headerName: 'Year',
        field: 'year',
        type: 'numberColumn',
      },
      {
        headerName: 'Date',
        field: 'date',
        type: ['dateColumn', 'nonEditableColumn'],
        width: 220,
      },
      {
        headerName: 'Medals',
        groupId: 'medalsGroup',
        children: [
          {
            headerName: 'Gold',
            field: 'gold',
            type: 'medalColumn',
          },
          {
            headerName: 'Silver',
            field: 'silver',
            type: 'medalColumn',
          },
          {
            headerName: 'Bronze',
            field: 'bronze',
            type: 'medalColumn',
          },
          {
            headerName: 'Total',
            field: 'total',
            type: 'medalColumn',
            columnGroupShow: 'closed',
          },
        ],
      }
    ];
    this.defaultColDef = {
      width: 150,
      editable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
    };
    this.defaultColGroupDef = { marryChildren: true };
    this.columnTypes = {
      numberColumn: {
        width: 130,
        filter: 'agNumberColumnFilter',
      },
      medalColumn: {
        width: 100,
        columnGroupShow: 'open',
        filter: false,
      },
      nonEditableColumn: { editable: false },
      dateColumn: {
        filter: 'agDateColumnFilter',
        filterParams: {
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateParts = cellValue.split('/');
            var day = Number(dateParts[0]);
            var month = Number(dateParts[1]) - 1;
            var year = Number(dateParts[2]);
            var cellDate = new Date(year, month, day);
            if (cellDate < filterLocalDateAtMidnight) {
              return -1;
            } else if (cellDate > filterLocalDateAtMidnight) {
              return 1;
            } else {
              return 0;
            }
          },
        },
      },
    };
  }

  onGridReady(params) {
    const subsription = this.dataService.getDataList().then(res => {
      this.rowData = res;
      //console.log(res)
    }, err => {

    });


  }

}
