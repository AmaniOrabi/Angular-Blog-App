import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StringifyOptions } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _snackBar = inject(MatSnackBar);

  constructor() {}

  successSnackbar(message: string) {
    this._snackBar.open(message, 'Close', {
      panelClass: 'bg-primary',
    });
  }

  failureSNackbar(message: string) {
    this._snackBar.open(message, 'Close', {
      panelClass: 'bg-accent',
    });
  }
}
