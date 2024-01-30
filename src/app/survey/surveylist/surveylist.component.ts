import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, CommonModule, DecimalPipe} from "@angular/common";
import {CountryService} from "../../service/country.service";
import {Observable} from "rxjs";
import {Country} from "../../model/country";
import {NgbdSortableHeader, SortEvent} from "../../service/sortable.directive";
import {Employee} from "../../model/employee";
import {
  MatCell, MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import {MatCard} from "@angular/material/card";
import {MatTabHeader} from "@angular/material/tabs";
import {MatSort, MatSortHeader} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router, RouterLink, RouterModule} from "@angular/router";
import {routes} from "../../app.routes";
import {SurveyModule} from "../survey.module";
import {PickerComponent} from "@ctrl/ngx-emoji-mart";

// @ts-ignore
@Component({
  selector: 'app-surveylist',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgbdSortableHeader,
    DecimalPipe,
    CommonModule,
    MatCard,
    MatTabHeader,
    MatHeaderRow,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatSortHeader,
    MatRow,
    MatRowDef,
    MatCell,
    MatCellDef,
    MatPaginator, MatSort, MatTable, MatTableModule, RouterLink, PickerComponent
  ],
  providers:[
    CountryService, DecimalPipe
  ],
  templateUrl: './surveylist.component.html',
  styleUrl: './surveylist.component.css'
})
export class SurveyListComponent implements OnInit{
  name = 'Angular';
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];
  public textArea: string = '';
  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];
  IsTcNumberTrue:number=0;
  public isEmojiPickerVisible: boolean | undefined;
  dataSource = new MatTableDataSource(this.EmpData);

  constructor(private router: Router) {}

  ngAfterViewInit() {}
  public addEmoji(event:any) {
    this.textArea = `${this.textArea}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }
  ngOnInit(): void {}

  //tckimlikno hesaplama
  isIdentityNo():void {
    const status = this.IsTcNumberTrue;
    if (status.toString().length == 11 && Number(status.toString().substring(0, 1)) != 0) {
      //const total = Array.from(status.toString(), Number);
      const total = status.toString().split('').map(Number);
      const oddSum = total[0] + total[2] + total[4] + total[6] + total[8];
      const evenSum = total[1] + total[3] + total[5] + total[7];
      const result = (oddSum * 7 - evenSum) % 10;
      if (Number(status.toString().substring(9, 10)) == result) {
        const totalValues = total.slice(0, 10).reduce((sum, current) => sum + current, 0) % 10;
        if (Number(status.toString().substring(10, 11)) == totalValues) {
          console.log("tc dogru");
          debugger;
        }
      } else {
        console.log("dot Works");
        debugger;
      }

      // @ts-ignore
      // this.router.navigated(["/survey"]);
      this.router.navigate(['/crud']);
    }
  }

}
