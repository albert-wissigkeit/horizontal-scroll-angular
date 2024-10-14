import { AfterViewInit, Component, HostListener } from '@angular/core';
import { FirstComponent } from "../first/first.component";
import { SecondComponent } from "../second/second.component";
import { ThirdComponent } from "../third/third.component";
import { HorizontalScrollDirective } from '../horizontal-scroll.directive';

@Component({
  selector: 'app-all-pages',
  standalone: true,
  imports: [FirstComponent, SecondComponent, ThirdComponent, HorizontalScrollDirective],
  templateUrl: './all-pages.component.html',
  styleUrl: './all-pages.component.scss'
})
export class AllPagesComponent {
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.isMobileView = event.target.innerWidth < 500;
  }

  ngOnInit() {
    this.isMobileView = window.innerWidth < 500;
  }

  scrollToElementWithOffset(elementId: string, offset: number = 0) {
    const element = document.getElementById(elementId);
    const container = document.querySelector('section[appHorizontalScroll]');
    if (element && container) {
      const elementPosition = element.getBoundingClientRect().left + container.scrollLeft;
      container.scrollLeft = elementPosition - offset;
    } else {
      console.error(`Element mit ID ${elementId} oder Container nicht gefunden.`);
    }
  }
}
