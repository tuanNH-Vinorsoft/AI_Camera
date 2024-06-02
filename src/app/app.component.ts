import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppFrameComponent } from './component/app-frame/app-frame.component';
import { AdministratorComponent } from './component/administrator/administrator.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgClass, NgStyle } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppFrameComponent, RouterModule, RouterOutlet, NzMenuModule, NgStyle, NzIconModule, NgClass, NzDividerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
}
