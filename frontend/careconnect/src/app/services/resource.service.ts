import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource.model';

// Injectable service responsible for all resource-related API calls.
@Injectable({
  // Register once at app root so any component can inject it.
  providedIn: 'root'
})
export class ResourceService {
  // Base endpoint exposed by the backend controller.
  private readonly apiUrl = 'http://localhost:5000/api/resources';

  // HttpClient is injected by Angular DI.
  constructor(private readonly http: HttpClient) {}

  // GET all resources from the backend.
  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }
}
