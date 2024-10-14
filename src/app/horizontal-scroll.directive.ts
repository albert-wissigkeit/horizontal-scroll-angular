import { AfterViewInit, Directive, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[appHorizontalScroll]',
  standalone: true
})
export class HorizontalScrollDirective implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    // Explizite Typangabe für das WheelEvent
    fromEvent<WheelEvent>(this.elementRef.nativeElement, 'wheel')
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: WheelEvent) => this.onScroll(event));
  }

  // Logik für das horizontale Scrollen
  private onScroll(event: WheelEvent): void {
    event.preventDefault(); // Verhindert das vertikale Scrollen
    const element = this.elementRef.nativeElement;
    
    // Scrollt horizontal, wenn vertikales Scrollen registriert wird
    element.scrollLeft += event.deltaY;
  }

  ngOnDestroy(): void {
    // Aufräumen, wenn die Direktive zerstört wird
    this.destroy$.next();
    this.destroy$.complete();
  }
}