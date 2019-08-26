import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  private fragment: string;

  constructor(private fb: FormBuilder, private route:ActivatedRoute, 
    private router:Router) {

router.events.subscribe(event => {
if (event instanceof NavigationEnd) {    
if (event.url) {
this.route.fragment.subscribe(fragment => this.fragment = fragment);
}
}
});

}

ngAfterViewChecked(): void {

  try {
    if(this.fragment != null) {
     document.querySelector("a[name="+this.fragment+"]").scrollIntoView();
    }
  } catch (e) {
    //console.log(e, 'error');
  }

}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
}
