import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HeroComponent } from '@sellemond/portfolio/feature-hero';
import { ViewportScroller } from '@angular/common';
import { TechstackComponent } from '@sellemond/portfolio/feature-techstack';
import { IntroductionComponent } from '@sellemond/portfolio/feature-introduction';
import { ProjectsComponent } from '@sellemond/portfolio/feature-projects';
import { NavigationItem } from './model/navigation-item.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sellemond-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'portfolio';
  observer: IntersectionObserver | null = null;

  heroNavigationItem: NavigationItem = {
    componentId: 'hero',
    title: 'Home',
    svgHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">\n' +
      '  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />\n' +
      '</svg>',
  };
  techstackNavigationItem: NavigationItem = {
    componentId: 'techstack',
    title: 'Tech Stack',
    svgHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n' +
      '  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />\n' +
      '</svg>',
  };
  introductionNavigationItem: NavigationItem = {
    componentId: 'about',
    title: 'About',
    svgHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n' +
      '  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n' +
      '</svg>',
  };
  projectsNavigationItem: NavigationItem = {
    componentId: 'projects',
    title: 'Projects',
    svgHtml:
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">\n' +
      '  <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />\n' +
      '</svg>',
  };

  navigationItems: NavigationItem[] = [
    this.heroNavigationItem,
    this.techstackNavigationItem,
    this.introductionNavigationItem,
    this.projectsNavigationItem,
  ];

  currentlyVisibleComponentId = '';

  @ViewChild(HeroComponent, { read: ElementRef }) heroEl!: ElementRef;
  @ViewChild(TechstackComponent, { read: ElementRef }) techStackEl!: ElementRef;
  @ViewChild(IntroductionComponent, { read: ElementRef })
  intronEl!: ElementRef;
  @ViewChild(ProjectsComponent, { read: ElementRef }) projectsEl!: ElementRef;

  constructor(
    public viewPortScroller: ViewportScroller,
    private sanitizer: DomSanitizer
  ) {}

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const isYOffsetInBetween = (curr: ElementRef, prev: ElementRef) =>
      window.scrollY >= curr.nativeElement.offsetTop &&
      window.scrollY < prev.nativeElement.offsetTop;

    if (isYOffsetInBetween(this.heroEl, this.techStackEl)) {
      this.currentlyVisibleComponentId = this.heroNavigationItem.componentId;
    } else if (isYOffsetInBetween(this.techStackEl, this.intronEl)) {
      this.currentlyVisibleComponentId =
        this.techstackNavigationItem.componentId;
    } else if (isYOffsetInBetween(this.intronEl, this.projectsEl)) {
      this.currentlyVisibleComponentId =
        this.introductionNavigationItem.componentId;
    } else if (window.scrollY > this.projectsEl.nativeElement.offsetTop) {
      this.currentlyVisibleComponentId =
        this.projectsNavigationItem.componentId;
    }
  }

  ngOnInit(): void {
    this.currentlyVisibleComponentId = this.heroNavigationItem.componentId;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  sanitize(svgHtml: string | undefined) {
    return this.sanitizer.bypassSecurityTrustHtml(svgHtml ?? '');
  }
}
