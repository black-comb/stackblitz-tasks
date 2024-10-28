import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';

import { ChildData } from '../types/child-data';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ChildComponent {
  @Input({ required: true })
  public content!: ChildData;
}
