import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;

  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
            this.editItemIndex = index;
            this.editMode = true;
            this.editedItem = this.shoppingListService.getIngredient(index);
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            }
          );
        }
      );
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newIngredient = new Ingredient(form.value.name, form.value.amount);
      if(this.editMode) {
        this.shoppingListService.updateIngrediet(this.editItemIndex, newIngredient);
      } else {
        this.shoppingListService.addIngredient(newIngredient);
      }
    }
    this.onClear();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngedient(this.editItemIndex);
    }
    this.onClear();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
