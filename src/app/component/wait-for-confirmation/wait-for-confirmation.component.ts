import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgFor, NgIf, SlicePipe } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';

interface waitService {
  stt: number;
  name: string;
  img: string;
  timeSave: string;
  timeStart: string;
  extensionStatus: boolean;
  price: string;
  staus: number
}

@Component({
  selector: 'app-wait-for-confirmation',
  standalone: true,
  imports: [RouterModule, RouterOutlet, NzTableModule, NgFor, NzIconModule, NgIf, PaginationComponent, SlicePipe, FormsModule, NzDividerModule],
  templateUrl: './wait-for-confirmation.component.html',
  styleUrl: './wait-for-confirmation.component.css'
})
export class WaitForConfirmationComponent implements OnInit {
  listOfData: waitService[] = [
    {
      stt: 1,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 2,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: false,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 3,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 4,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 5,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 6,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 7,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 8,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 9,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 10,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 11,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 12,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: false,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 13,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 14,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 15,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 16,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 17,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 18,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 19,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 20,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 1,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 2,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: false,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 3,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 4,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 5,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 6,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 7,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 8,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 9,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 10,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 11,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 12,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: false,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 13,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 14,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 15,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 16,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 2
    },
    {
      stt: 17,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 3
    },
    {
      stt: 18,
      name: 'Dịch vụ nhận diện khuôn mặt',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 19,
      name: 'Phát hiện người',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
    {
      stt: 20,
      name: 'Phát hiện chuyển động',
      img: 'Full HD - 4K',
      timeSave: '01/01/2024',
      timeStart: '07/01/2024',
      extensionStatus: true,
      price: '1.000.000đ',
      staus: 1
    },
  ];

  filteredServices: any[] = [];
  nameSevices: string = '';

  ngOnInit(): void {
    this.filterServices();
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

  pageSize = 9
  currentPage = 1;
  isFullScreen = false;

  handlePageClick(page: number): void {
    this.currentPage = page;
  }

  handleNext(total: number): void {
    if (this.currentPage < total) {
      this.currentPage++;
    }
  }

  handlePrevious(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
