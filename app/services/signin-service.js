System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/do'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var SignInService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            SignInService = (function () {
                function SignInService(http) {
                    this.http = http;
                }
                SignInService.prototype.signIn = function (email, password) {
                    return this.http.post('http://localhost:8080/api/login', JSON.stringify({
                        email: email,
                        password: password,
                    })).do(function (resp) {
                        localStorage.setItem('jwt', resp.headers.get('X-AUTH-TOKEN'));
                    });
                };
                SignInService.prototype.signOut = function () {
                    localStorage.removeItem('jwt');
                };
                SignInService.prototype.isSignedIn = function () {
                    return localStorage.getItem('jwt') !== null;
                };
                SignInService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SignInService);
                return SignInService;
            }());
            exports_1("SignInService", SignInService);
        }
    }
});
//# sourceMappingURL=signin-service.js.map