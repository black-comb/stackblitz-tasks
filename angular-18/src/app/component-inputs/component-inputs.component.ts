import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';

import { ChildData } from './types/child-input';

@Component({
  selector: 'app-component-inputs',
  standalone: true,
  imports: [],
  templateUrl: './component-inputs.component.html',
  styleUrl: './component-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ComponentInputsComponent {
  public childData: ChildData = {
    title: '',
    content: ''
  };
}
