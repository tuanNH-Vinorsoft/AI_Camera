import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzDividerModule],
  templateUrl: './administrator.composent.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {

}
