import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';

interface billingInformation {
  name: string;
  note: string
}

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzIconModule, NgFor, NgIf, NgStyle, NzDividerModule],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  listInformation: billingInformation[] = [
    {
      name: 'Mã hoá đơn',
      note: '019283'
    },
    {
      name: 'Ngân hàng',
      note: 'MB Bank'
    },
    {
      name: 'Tên chủ tài khoản',
      note: 'Cù Thị Chung'
    },
    {
      name: 'Số tài khoản',
      note: '0123999999'
    },
    {
      name: 'Số tiền thanh toán',
      note: '360.000 đ'
    },
    {
      name: 'Nội dung',
      note: 'thanh toan dich vu “Mã hoá đơn” cho Vinorsoft'
    },
  ]
}
