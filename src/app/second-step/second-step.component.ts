import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {FinishDialogComponent} from "../finish-dialog/finish-dialog.component";
import {User} from "../user/user";
import {ConnexionService} from "../connexion.service/connexion.service";

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {

  @Input() user = new User();
  loading = false;
  constructor(
    private dialog: MatDialog,
    private cnxService: ConnexionService
  ) { }

  ngOnInit() {

  }
  onScroll(terms, check){
    if (terms.scrollTop + terms.offsetHeight +2 >= terms.scrollHeight){
      check.removeAttribute('disabled');
    }
  }
  onValid(check){
    if(check.checked) {
      this.loading = true;
      this.cnxService.createConnexion(this.user).subscribe(
        result => {
          this.showAlert('Opération terminée.', 'Votre connexion est terminée avec succès.');
          this.loading = false;
        },
        error => {
          this.showAlert('Opération échouée.', 'Connexion non valide, erreur serveur.');
          this.loading = false;
        });
    } else {
      this.showAlert('Action non valide.', 'Lire et accepter les termes pour terminer');
    }
  }
  showAlert(title: string, description:string) {
    let dialogRef = this.dialog.open(FinishDialogComponent, {
      data: {
        'title': title,
        'description': description
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // NOTE: The result can also be nothing if the user presses the `esc` key or clicks outside the dialog
    })
  }
}
