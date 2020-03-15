import { Component} from '@angular/core';
import { $ } from 'protractor';

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
    console.log(this.task);  //testing task variable
    this.task = '';
    console.log(this.tasks); // testing tasks variable
    var lis = document.querySelectorAll("li");
    console.log(lis);
    

  var lisLength = lis.length;
  lis[lisLength - 1].addEventListener("click", function(){
    this.classList.toggle("done");
  });


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
  
}
  }

  

