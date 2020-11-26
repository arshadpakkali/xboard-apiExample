import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserauthService } from '../../../services/userauth.service';
import { Observable, Subscription } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../../environments/environment"
// import { environment } from 'src/environments/environment';
import { differenceInDays } from 'date-fns';
import {faBell} from '@fortawesome/free-solid-svg-icons'
interface notificationData {
  productName: string;
  expiry: string | number;
}

@Component({
  selector: 'app-notificaton-menu',
  templateUrl: './notificaton-menu.component.html',
  styleUrls: ['./notificaton-menu.component.css'],
})
export class NotificatonMenuComponent implements OnInit, OnDestroy {
  response = ['test'];

  email$: Observable<{ emailAddress: string }>;
  notificaton$: Observable<notificationData[]>;
  notifications: notificationData[] = [];
  counts = 0;
  subscription$: Subscription;
  email: string;
  faBell = faBell;
  constructor(
    private _userService: UserauthService,
    private _http: HttpClient
  ) {
    this.email$ = this._http.get<{ emailAddress: string }>(
      `${environment.url}/api/user/get-user-by-token`,
      {}
    );
  }
  onClickCount(): void {
    this.counts = 0;
  }

  ngOnInit(): void {
    this.notificaton$ = this.email$.pipe(
      flatMap(({ emailAddress: email }) => {
        return this._userService.getNotifications<notificationData[]>(email);
      }),
      map((value:notificationData[]) => {
        value.forEach((obj) => {
          const difference = differenceInDays(new Date(obj.expiry), new Date());
          obj.expiry = difference;
        });
        return value;
      })
    );
    this.subscription$ = this.notificaton$.subscribe((res) => {
      res.forEach((obj) => {
        if (obj.expiry <= 3) {
          console.log(obj);
          this.notifications.push(obj);
        }
      });
      this.counts = this.notifications.length;
    });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}