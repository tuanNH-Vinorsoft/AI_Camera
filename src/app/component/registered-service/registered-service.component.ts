import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormControl, FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';

interface Service {
  stt: number;
  name: string;
  img: string;
  timeSave: string;
  timeStart: string;
  extensionStatus: boolean;
  quantity: number;
  staus: boolean
}

interface Camera {
  stt: number;
  name: string;
  timeStart: string;
  timeEnd: string;
  status: boolean;
  start: string;
  end: string;
  quantity: number;
}

@Component({
  selector: 'app-registered-service',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzTableModule, NgFor, NzSwitchModule, NzPaginationModule, NgIf, NzIconModule, FormsModule, SlicePipe, PaginationComponent, NzDividerModule, NzModalModule],
  templateUrl: './registered-service.component.html',
  styleUrl: './registered-service.component.css'
})

export class RegisteredServiceComponent {
  showScreen = false

  setShow(){
    this.showScreen = !this.showScreen
  }

  listOfData: Service[] = [
    {
      stt: 1,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
    {
      stt: 2,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
    {
      stt: 3,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 4,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: false
    },
    {
      stt: 5,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 6,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: false
    },
    {
      stt: 7,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 8,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 9,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 10,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
    {
      stt: 11,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
    {
      stt: 12,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
    {
      stt: 13,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 14,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: false
    },
    {
      stt: 15,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 16,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: false
    },
    {
      stt: 17,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 18,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 19,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: true,
      quantity: 16,
      staus: true
    },
    {
      stt: 20,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '01/03/2024 08:00 PM',
      extensionStatus: false,
      quantity: 16,
      staus: true
    },
  ];

  listOfCamera: Camera[] = [
    {
      stt: 1,
      name: 'Nhà số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 2,
      name: 'Nhà số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 3,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 4,
      name: 'Tổng ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 5,
      name: 'Tổng ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 6,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 7,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 8,
      name: 'Nhà ma 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 9,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 10,
      name: 'Camera số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 11,
      name: 'Nhà kho số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 12,
      name: 'Nhà kho số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 13,
      name: 'Camera số 2',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 14,
      name: 'Nhà số 3',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 15,
      name: 'Tổng ty TNHH Như Anh 2',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 16,
      name: 'Nhà kho số 2',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 17,
      name: 'Nhà kho số 2',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 18,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
      quantity: 12
    },
    {
      stt: 19,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
    {
      stt: 20,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
      quantity: 12
    },
  ]

  pageSize = 9
  isFullScreen = false;
  
  // totalServices = Math.ceil(this.listOfData.length / this.pageSize);
  currentService = 1;
  filteredServices: any[] = [];
  nameSevices: string = '';

  ngOnInit(): void {
    this.filterServices();
    this.filterCameras();
  }

  filterServices(): void {
    this.filteredServices = this.listOfData.filter(services => 
      (this.nameSevices ? services.name.includes(this.nameSevices) : true)
    );
  }

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nameSevices = target.value;
    this.filterServices();
  }

  handlePageClick(page: number): void {
    this.currentService = page;
  }

  handleNext(totalServices: number): void {
    if (this.currentService < totalServices) {
      this.currentService++;
    }
  }

  handlePrevious(): void {
    if (this.currentService > 1) {
      this.currentService--;
    }
  }

  // totalCamera = Math.ceil(this.listOfCamera.length / this.pageSize);
  currentCamera = 1
  filteredCameras: any[] = [];
  nameCameras: string = '';

  filterCameras(): void {
    this.filteredCameras = this.listOfCamera.filter(services => 
      (this.nameCameras ? services.name.includes(this.nameCameras) : true)
    );
  }

  onCameraChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.nameCameras = target.value;
    this.filterCameras();
  }

  handlePageClickCamera(page: number): void {
    this.currentCamera = page;
  }

  handleNextCamera(totalCamera: number): void {
    if (this.currentCamera < totalCamera) {
      this.currentCamera++;
    }
  }

  handlePreviousCamera(): void {
    if (this.currentCamera > 1) {
      this.currentCamera--;
    }
  }
}
