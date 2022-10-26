import { Component, VERSION } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  options: AnimationOptions = {
    path: "/assets/animation.json"
  };


  constructor() {
    
  }
  // styles: Partial<CSSStyleDeclaration> = {
  //   maxWidth: '500px',
  //   margin: '0 auto',
  // };
}
