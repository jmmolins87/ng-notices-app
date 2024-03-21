import { 
  Component, 
  EventEmitter, 
  Input, 
  Output 
} from '@angular/core';

import { categoriesCountries } from 'src/app/interface/categoriesCountries.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public selectedCategory: string = 'general';
  public selectedCountry: string = 'ar';
  public categories: categoriesCountries[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Negocios' },
    { value: 'entertainment', name: 'Entretenimiento' },
    { value: 'health', name: 'Salud' },
    { value: 'science', name: 'Ciencia' },
    { value: 'sports', name: 'Deportes' },
    { value: 'technology', name: 'Tecnología' }
  ]
  public countries: categoriesCountries[]  = [
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungría' },
    { value: 'mx', name: 'México' },
    { value: 'gb', name: 'Reino Unido' }
  ]

  @Input()
  titleJumbotron: string = 'Filtra Notícias por país y categoría';

  @Output()
  selectedParams = new EventEmitter;

  searchNotice() {
    
    const params = {
      category: this.selectedCategory,
      country: this.selectedCountry
    }

    this.selectedParams.emit( params );
  }

}
