import { Component,Output,EventEmitter, OnInit ,} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../search.service';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  serch !:string;
  constructor(private search:SearchService){}
  onSearch(){
  this.search.modifierText(this.serch);
  }

}
