import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-candidate-description',
  templateUrl: 'candidate-description.component.html'
})
export class CandidateDescriptionComponent {
  @Input()
  data: any;
}
