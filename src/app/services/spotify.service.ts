import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    
    private searchUrl: string;
    private client_id: string = "08ea2abd60014c5e8c95e7c3ee741a4a";
    private client_secret: string = "3d9f9e4d083046d496cb8a23bf04349c";
    private token: string;

    constructor(private _http:Http){ }

    getToken() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(this.client_id + ":" + this.client_secret));
        headers.append('Content-Type','application/x-www-form-urlencoded' );

        let params: URLSearchParams = new URLSearchParams();
        params.set('grant_type', 'client_credentials');
        let body = params.toString();

        return this._http.post('https://accounts.spotify.com/api/token', body, {headers: headers})
            .map(res => res.json());
    }

    searchMusic(str:string, type='artist', token:string) {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token );
        this.searchUrl = 'https://api.spotify.com/v1/search?q='+str+'&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, { headers: headers })
                .map(res => res.json());
    }
    
}