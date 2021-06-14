import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromUser from '../store/product.reducer';
import * as ProductActions from '../store/product.action';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  showImage: boolean = false;
  imageUrl: string = '';
  constructor(private store: Store<fromUser.State>) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      soldCount: new FormControl(0),
    });
  }
  onProductSave() {
    let product = this.productForm.value;
    this.store.dispatch(ProductActions.AddProduct({ ...product }));
  }

  selectfile(event) {
    var files = event.target.files;

    if (files && files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (event) => {
        this.imageUrl = event.target.result.toString();
        this.productForm.patchValue({
          image: event.target.result,
        });
        this.productForm.get('image').updateValueAndValidity();
        this.showImage = true;
      };
    }
  }
}
