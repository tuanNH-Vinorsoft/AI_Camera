import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [],
  template: `
    <p>
      Đang trong thời gian phát triển {{content}}
    </p>
  `,
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  content = this.route.snapshot.params['string'];
}
