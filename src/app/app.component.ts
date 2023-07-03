import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
  '../app/global-styles/_wrapper.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  constructor(private router: Router, private titleService: Title) {}
  titleChanges$!: Subscription;
  ngOnInit() {
    this.titleChanges$ = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const title = this.getTitle(this.router.routerState.snapshot.root);
        this.titleService.setTitle(title);
      });
  }
  getTitle(route: ActivatedRouteSnapshot): string {
    let title = route.data && route.data['title'] ? 'Tech Marketplace | ' + route.data['title'] : 'Tech Marketplace';
    if (route.firstChild) {
      title = this.getTitle(route.firstChild) || title;
    }
    return title;
  }
  ngOnDestroy() {
    this.titleChanges$.unsubscribe()
  }
}
