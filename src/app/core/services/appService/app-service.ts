import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Service()
export class AppService {
    private readonly httpClient = inject(HttpClient);

    get<T>(endpoint: string) {
        return this.httpClient.get<T>(`${environment.BaseUrlForDotNet}/${endpoint}`);
    }

    getAsync<T>(endpoint: string) {
        return firstValueFrom(this.get<T>(endpoint));
    }
}
