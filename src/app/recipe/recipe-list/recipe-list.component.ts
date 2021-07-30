import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://www.simplyrecipes.com/thmb/IrINpCiq9QGVUfRNHpAvGiapOfU=/2958x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
