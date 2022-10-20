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
import { HtmlSanitizerService } from '@sellemond/shared/util-components';
import { Title } from '@angular/platform-browser';
import { SocialLink } from '../../../../libs/shared/ui-components/src/lib/model/social-link.model';

const themeKey = 'fs-portfolio-theme';
const darkThemeClass = 'dark';
const lightThemeClass = 'light';

@Component({
  selector: 'sellemond-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  observer: IntersectionObserver | null = null;

  footerSocialLinks: SocialLink[] = [
    {
      description: 'LinkedIn',
      svgPath:
        '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
      url: 'https://www.linkedin.com/in/fabian-sellemond-963a42128/',
    },
    {
      description: 'Github',
      svgPath:
        '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>',
      url: 'https://github.com/Fzum',
    },
  ];

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

  currentlyVisibleComponentId = this.heroNavigationItem.componentId;

  @ViewChild(HeroComponent, { read: ElementRef }) heroEl!: ElementRef;
  @ViewChild(TechstackComponent, { read: ElementRef }) techStackEl!: ElementRef;
  @ViewChild(IntroductionComponent, { read: ElementRef })
  intronEl!: ElementRef;
  @ViewChild(ProjectsComponent, { read: ElementRef }) projectsEl!: ElementRef;

  @ViewChild('mobileThemeSwitcher') mobileThemeSwitcher!: ElementRef;

  constructor(
    public viewPortScroller: ViewportScroller,
    public htmlSanitizer: HtmlSanitizerService,
    titleService: Title
  ) {
    titleService.setTitle('Software Sellemond');
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.setCurrentVisibleMenuItemBasedOnYOffset();
    this.hideMobileThemeSwitcherBasedOnYOffset();
  }

  private setCurrentVisibleMenuItemBasedOnYOffset() {
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

  private hideMobileThemeSwitcherBasedOnYOffset() {
    const themeSwitcher = this.mobileThemeSwitcher.nativeElement;
    const isMobileThemeSwitcherVisible =
      window.getComputedStyle(themeSwitcher).display !== 'none';

    if (isMobileThemeSwitcherVisible) {
      themeSwitcher.style.bottom = `-${window.scrollY}px`;
    }
  }

  ngOnInit(): void {
    this.setTheme();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setTheme() {
    this.enableDarkIfMatchesSystemPreferenceAndThemeHasNeverBeenSet();

    const isDarkThemeSet = localStorage.getItem(themeKey) === darkThemeClass;
    const classList = document.documentElement.classList;

    if (isDarkThemeSet && !classList.contains(darkThemeClass)) {
      classList.add(darkThemeClass);
    }
  }

  private enableDarkIfMatchesSystemPreferenceAndThemeHasNeverBeenSet() {
    if (
      localStorage.getItem(themeKey) == undefined &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.enableDarkMode();
    }
  }

  isDarkModeEnabled() {
    return document.documentElement.classList.contains(darkThemeClass);
  }

  enableDarkMode() {
    document.documentElement.classList.add(darkThemeClass);
    localStorage.setItem(themeKey, darkThemeClass);
  }

  disableDarkMode() {
    document.documentElement.classList.remove(darkThemeClass);
    localStorage.setItem(themeKey, lightThemeClass);
  }
}
