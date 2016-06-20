import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from "@angular/router";
import {HttpClient} from "./utils/http-client";

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, HttpClient]);
