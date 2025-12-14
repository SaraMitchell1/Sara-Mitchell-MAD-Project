import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, 
  IonLabel, IonButton, IonThumbnail 
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonThumbnail
  ]
})
export class RecipeDetailsPage implements OnInit {
  recipeId: number = 0;
  measurementUnit: 'metric' | 'us' = 'metric';
  recipe: any = {}; 

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.recipeId = +id;

    
    const savedUnit = localStorage.getItem('measurementUnit');
    if (savedUnit === 'metric' || savedUnit === 'us') this.measurementUnit = savedUnit;

   
    this.fetchRecipeDetails(this.recipeId);
  }

  
  fetchRecipeDetails(id: number) {
    console.log('Fetching details for recipe id:', id);
   
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}
