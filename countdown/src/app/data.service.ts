import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedData = new Subject<string>();
  constructor() { }

  public getSharedData(): Observable<string> {
    return this.sharedData.asObservable();
  }

  public setSharedData(data: string): void {
    this.sharedData.next(data);
  }
}
