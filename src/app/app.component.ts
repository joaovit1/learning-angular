import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = "I'm in the";
	appName = 'LearningApp'
	buttonDisable = true;

	constructor(){
		setTimeout(()=> {
			this.buttonDisable = false;
		}, 2000)
	}

	onButtonChangeTitle(){
		this.title= "I'm in the " + this.appName +'!'
	}

	onInputUpdateAppName(event: any){
		this.appName = event.target.value
	}
}
