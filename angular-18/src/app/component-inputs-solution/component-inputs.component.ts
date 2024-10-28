import {
  ChangeDetectionStrategy,
  Component
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import ChildComponent from './child/child.component';
import { ChildData } from './types/child-data';

@Component({
  selector: 'app-component-inputs',
  standalone: true,
  imports: [ChildComponent, FormsModule],
  templateUrl: './component-inputs.component.html',
  styleUrl: './component-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ComponentInputsComponent {
  public childData: ChildData = {
    title: '',
    content: ''
  };

  public onTitleChanged(value: string): void {
    this.childData = { ...this.childData, title: value };
  }

  public onContentChanged(value: string): void {
    this.childData = { ...this.childData, content: value };
  }
}
