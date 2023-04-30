import { Injectable } from '@angular/core';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {
  getAuthorizationToken() {
    return 'Bearer 1|yUNLD0hFKrwiPLqXTR7XMlabr0opI2KzoauDzdnI';
  }
}
