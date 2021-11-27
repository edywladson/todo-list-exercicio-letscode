import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompletedTasks]'
})
export class CompletedTasksDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.opacity = ".5";
  }

}
