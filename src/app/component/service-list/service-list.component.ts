import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';import { RouterModule, RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgFor, NgIf } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SlicePipe } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';

const customViVN = {
  ...vi_VN,
  DatePicker: {
    ...vi_VN.DatePicker,
    okText: 'Xác nhận'
  }
};


interface Camera {
  stt: number;
  name: string;
  timeStart: string;
  timeEnd: string;
  status: boolean;
  start: string;
  end: string;
}

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [[RouterModule, RouterOutlet, NzTableModule, NgFor, NzIconModule, SlicePipe, NgIf, PaginationComponent, NzCheckboxModule, FormsModule, NzDatePickerModule, NzDividerModule]],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {
  constructor(private i18n: NzI18nService) {
    this.i18n.setLocale(customViVN);
  }

  cameraName = ''
  dateStart: Date | null = null
  dateEnd: Date | null = null
  checkOn: boolean | null = null;
  checkOff: boolean | null = null;
  clickAll() {
    this.checkOn = false
    this.checkOff = false
    this.cameraName = ''
    this.dateStart = null
    this.dateEnd = null
  } 

  listOfCamera: Camera[] = [
    {
      stt: 1,
      name: 'Nhà số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/01/2024 08:00 PM',
      end: '',
    },
    {
      stt: 2,
      name: 'Nhà số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/01/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 3,
      name: 'Nhà kho số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/04/2024 08:00 PM',
      end: '',
    },
    {
      stt: 4,
      name: 'Nhà kho số 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/04/2024 08:00 PM',
      end: '',
    },
    {
      stt: 5,
      name: 'Tổng ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/01/2024 08:00 PM',
    },
    {
      stt: 6,
      name: 'Tổng ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 7,
      name: 'Công ty TNHH Như Anh 5',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 8,
      name: 'Công ty TNHH Như Anh 5',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/05/2024 08:00 PM',
      end: '01/05/2024 08:00 PM',
    },
    {
      stt: 9,
      name: 'Công ty TNHH Như Anh 5',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/05/2024 08:00 PM',
      end: '',
    },
    {
      stt: 10,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 11,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 12,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 13,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 14,
      name: 'Công ty TNHH Như Anh 1',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 15,
      name: 'Công ty TNHH Như Anh 8',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 16,
      name: 'Công ty TNHH Như Anh 8',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/03/2024 08:00 PM',
      end: '',
    },
    {
      stt: 17,
      name: 'Công ty TNHH Như Anh 6',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 18,
      name: 'Công ty TNHH Như Anh 6',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/03/2024 08:00 PM',
      end: '01/03/2024 08:00 PM',
    },
    {
      stt: 19,
      name: 'Công ty TNHH Như Anh 7',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: true,
      start: '01/01/2024 08:00 PM',
      end: '',
    },
    {
      stt: 20,
      name: 'Công ty TNHH Như Anh 7',
      timeStart: '01/03/2024 08:00 PM',
      timeEnd: '01/03/2024 08:00 PM',
      status: false,
      start: '01/01/2024 08:00 PM',
      end: '',
    },
  ];

  filteredCameras: any[] = [];

  ngOnInit(): void {
    this.filterCameras();
  }

  filterCameras(): void {
    this.filteredCameras = this.listOfCamera.filter(cameras => 
      (this.cameraName ? cameras.name.includes(this.cameraName) : true) &&
      // (this.dateStart ? cameras.start = this.dateStart : true) &&
      // (this.dateEnd ? cameras.end.includes(this.dateEnd) : true) &&
      (this.checkOn ? cameras.status === true : true) &&
      (this.checkOff ? cameras.status === false : true)
    );
  }

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.cameraName = target.value;
    this.filterCameras();
  }

  onStartChange(result: Date | null): void {
    this.dateStart = result;
    this.filterCameras();
  }

  onEndChange(result: Date | null): void {
    this.dateEnd = result;
    this.filterCameras();
  }

  onOnChange(event: boolean): void {
    this.checkOn = event;
    this.filterCameras();
  }

  onOffChange(event: boolean): void {
    this.checkOff = event
    this.filterCameras();
  }

  pageSize = 9
  currentPage = 1;
  isFullScreen = false;

  handlePageClick(page: number): void {
    this.currentPage = page;
  }

  handleNext(totalPages: number): void {
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  handlePrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
