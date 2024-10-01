import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AppConfigService, AuthService } from '@easy-advisor/shared/core';
//import { KeycloakService } from 'keycloak-angular';

@Component({
	selector: 'app-root',
	template: '<router-outlet />',
	standalone: true,
	imports: [RouterOutlet]
})
export class ContainerComponent {
	//private authService = inject(AuthService);
	//private appConfig = inject(AppConfigService);
	//private keycloak = inject(KeycloakService);

	constructor() {
		//const localToken = localStorage.getItem(`token${this.appConfig.clientCode}`);
		//const sessionToken = sessionStorage.getItem(`token${this.appConfig.clientCode}`);


		//if (localToken && !sessionToken && this.appConfig.logoutOnUnload) {
		//	this.authService.logout();
		//	this.keycloak.logout();
		//}
	}
}
