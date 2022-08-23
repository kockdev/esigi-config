
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrls: ['./config-dialog.component.scss'],
})
export class ConfigDialogComponent implements OnInit {
  configForm!: FormGroup;
  dataTable: any[] = [];
  displayedColumns: string[] = ['name', 'icon'];
  entity!: string;
  title!: string;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfigDialogComponent>,
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.title = this.data.title;
    this.entity = this.data.entity;
    this.initForm();
    this.getData();
  }

  initForm() {
    this.configForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  // clear(): void {
  //   this.clearForm();
  // }

  getData() {
    // todo - criar provider para buscar dados do backend e popular o dataTable
    // configProvider que vai receber a entity e retornar os dados
    // this.dataTable = await this.configProvider.findAll(this.entity);
    switch (this.entity) {
      case 'customers-changes':
        this.dataTable.push(
          {
            name: 'Cliente',
          },
        );
        break;
      case 'collaborators-changes':
        this.dataTable.push({
          name: 'Colaborador',
        });
        break;
      case 'projects-changes':
        this.dataTable.push({
          name: 'Projetos',
        });
        break;
      case 'finances-changes':
        this.dataTable.push({
          name: 'Finanças',
        });
        break;
      case 'generic-changes':
        this.dataTable.push({
          name: 'Genérico',
        });
        break;


      default:
        break;
    }
  }

  close() {
    this.dialogRef.close();
    sessionStorage.clear;
  }
}
