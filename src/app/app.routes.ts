import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdministratorComponent } from './component/administrator/administrator.component';
import { RegisterServiceComponent } from './component/register-service/register-service.component';
import { PayComponent } from './component/pay/pay.component';
import { WaitForConfirmationComponent } from './component/wait-for-confirmation/wait-for-confirmation.component';
import { RegisteredServiceComponent } from './component/registered-service/registered-service.component';
import { ServiceListComponent } from './component/service-list/service-list.component';
import { CameraComponent } from './component/camera/camera.component';



export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Trang chủ'
    },
    {
        path: 'administrator/services',
        component: AdministratorComponent,
        title: 'Danh sách dịch vụ'
    },
    {
        path: 'administrator/register-service/:id',
        component: RegisterServiceComponent,
        title: 'Đăng ký dịch vụ'
    },
    {
        path: 'pay',
        component: PayComponent,
        title: 'Thanh toán'
    },
    {
        path: 'administrator/wait-for-confirmation',
        component: WaitForConfirmationComponent,
        title: 'Chờ xác nhận'
    },
    {
        path: 'administrator/registered-service',
        component: RegisteredServiceComponent,
        title: 'Dịch vụ đăng ký'
    },
    {
        path: 'administrator/service-list',
        component: ServiceListComponent,
        title: 'Danh sách dịch vụ'
    },
    {
        path: 'camera/:string',
        component: CameraComponent,
        title: 'Đang trong thời gian phát triển'
    }
];
