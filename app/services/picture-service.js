System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var Picture, Comment, PictureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Picture = (function () {
                function Picture() {
                }
                return Picture;
            }());
            exports_1("Picture", Picture);
            Comment = (function () {
                function Comment() {
                }
                return Comment;
            }());
            exports_1("Comment", Comment);
            PictureService = (function () {
                function PictureService(http) {
                    this.http = http;
                }
                /**
                 * Retrieves picture from service
                 * @returns {Promise<Picture>}
                 */
                PictureService.prototype.getPicture = function (id) {
                    var _this = this;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
                    this.headers.append('Accept', 'application/json; charset=UTF-8');
                    this.requestoptions = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Get,
                        url: 'http://localhost:8080/rest/pictures/' + id + '/metadata',
                        headers: this.headers,
                    });
                    return new Promise(function (resolve, reject) {
                        _this.http.request(new http_1.Request(_this.requestoptions)).subscribe(function (response) {
                            var json = response.json();
                            if (json.error) {
                                reject(json);
                            }
                            resolve(json);
                        }, function () {
                            reject({ error: null });
                        });
                    });
                };
                /**
                 * Retrieves pictures from service
                 * @returns {Promise<T>}
                 */
                PictureService.prototype.getPictures = function () {
                    var _this = this;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
                    this.headers.append('Accept', 'application/json; charset=UTF-8');
                    this.requestoptions = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Get,
                        url: 'http://localhost:8080/rest/pictures/',
                        headers: this.headers,
                    });
                    return new Promise(function (resolve, reject) {
                        _this.http.request(new http_1.Request(_this.requestoptions)).subscribe(function (response) {
                            var json = response.json();
                            if (json.error) {
                                reject(json);
                            }
                            resolve(json);
                        }, function () {
                            reject({ error: null });
                        });
                    });
                };
                /**
                 * Saves a comments to a picture
                 * @param pictureId
                 * @param author
                 * @param text
                 * @returns {Promise<T>|Promise<R>|Promise}
                   */
                PictureService.prototype.saveComment = function (pictureId, author, text) {
                    var _this = this;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json; charset=UTF-8');
                    this.headers.append('Accept', 'application/json; charset=UTF-8');
                    this.requestoptions = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Put,
                        url: 'http://localhost:8080/rest/pictures/' + pictureId + '/comments/add/' + author + '/' + text,
                        headers: this.headers,
                    });
                    return new Promise(function (resolve, reject) {
                        _this.http.request(new http_1.Request(_this.requestoptions)).subscribe(function (response) {
                            var json = response.json();
                            if (json.error) {
                                reject(json);
                            }
                            resolve(json);
                        }, function () {
                            reject({ error: null });
                        });
                    });
                };
                PictureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PictureService);
                return PictureService;
            }());
            exports_1("PictureService", PictureService);
        }
    }
});
//# sourceMappingURL=picture-service.js.map