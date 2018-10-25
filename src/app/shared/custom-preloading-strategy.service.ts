import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, empty, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

type PreloadFn = () => Observable<any>;

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategy implements PreloadingStrategy {
  
  constructor() { }

  preload(route: Route, fn: PreloadFn): Observable<boolean> {
    if (route.data && route.data['preload']) {
      return fn();
    }
    return of(true);
  }


}
