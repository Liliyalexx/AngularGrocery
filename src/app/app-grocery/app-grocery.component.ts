import { Component} from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls:[
    '../../assets/css/bootstrap.min.css', 
    
    
  ]

})
export class AppGroceryComponent {
  task: string;
  tasks = [];

  onClick(){
    this.tasks.push({name: this.task});
  this.task = '';
}

}
var lis = document.querySelectorAll("li");
for (var i= 0; i<lis.length; i++) {
lis[i].addEventListener("mouseover", function(){
this.classList.add("selected"); 
});
lis[i].addEventListener("mouseout", function(){
  this.classList.remove("selected");
  });
  lis[i].addEventListener("click", function(){
this.classList.toggle("done");

  });
}
