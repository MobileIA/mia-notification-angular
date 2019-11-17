import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MiaAuthHttpService, AuthenticationService } from '@mobileia/authentication';
import { Observable } from 'rxjs';
import { ApiResponse, MIATableModel } from '@mobileia/core';
import { MiaNotificationConfig } from '../entities/mia-notification-config';
import { MiaNotification } from '../entities/mia-notification';

@Injectable({
  providedIn: 'root'
})
export class MiaNotificationService extends MiaAuthHttpService {

  baseUrl = '';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    @Optional() config: MiaNotificationConfig
  ) {
    super(http, authService);
    // Guardar URL
    if (config) {
      this.baseUrl = config.baseUrl;
    }
  }

  fetchLast(): Observable<ApiResponse<[MiaNotification]>> {
    return this.postAuthArray(this.baseUrl + 'notification/last', {});
  }

  fetchNews(notId: number): Observable<ApiResponse<[MiaNotification]>> {
    return this.postAuthArray(this.baseUrl + 'notification/news', { id: notId });
  }

  fetchMore(notId: number): Observable<ApiResponse<[MiaNotification]>> {
    return this.postAuthArray(this.baseUrl + 'notification/more', { id: notId });
  }

  read(notId: number): Observable<ApiResponse<true>> {
    return this.postAuthObject(this.baseUrl + 'notification/read', { id: notId });
  }
}
