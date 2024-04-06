import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {}
