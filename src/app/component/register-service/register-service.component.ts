import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';

interface voucher {
  name: string,
  sale: number
}

@Component({
  selector: 'app-register-service',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzSwitchModule, CommonModule, NzSelectModule, FormsModule, NgIf, NzIconModule, NzButtonModule, NzDividerModule, FormsModule],
  templateUrl: './register-service.component.html',
  styleUrl: './register-service.component.css'
})
export class RegisterServiceComponent {
  inpuDate = 0
  switchValue: boolean = false;
  switchInput: boolean = false
  checkVoucher = false
  code: string = ''
  price = 361;
  voucher = 20; 
}
