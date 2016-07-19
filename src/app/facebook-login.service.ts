import { Injectable } from '@angular/core';

// import { Subject } from 'rxjs';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

/*
  Generated class for the FacebookLogin provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var FB: any;
// declare var AWS: any;
declare let AWSCognito:any;
declare var apigClientFactory: any;

export interface FbStatus {
  status: string;
  authResponse: FbAuthResponse;
}

export interface FbAuthResponse {
  accessToken: string;
  expiresIn: string;
  signedRequest: string;
  userID: string;
}

@Injectable()
export class FacebookLoginService {

//   status$ = new Subject<FbStatus>();

  constructor() {
    
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

      (<any>window).fbAsyncInit = () => {
        FB.init({
          appId      : '1650752755250939',
          cookie     : true,  // enable cookies to allow the server to access the session 
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.2' // use version 2.2
        });
        
        FB.getLoginStatus(response => {
        //   this.status$.next(response);
        console.log(response);
        });
      }
  }

  login = () => {
    // FB.login(response => {
    // //   this.status$.next(response);
      

    //   if (response.authResponse) {

    //       console.log('You are now logged in.');
    //       console.log(AWSCognito);

    //       // Add the Facebook access token to the Cognito credentials login map.
    //       AWSCognito.config.region = 'ap-northeast-1';

    //       AWSCognito.config.credentials = new AWSCognito.CognitoIdentityCredentials({
    //         IdentityPoolId: 'ap-northeast-1:fb4a0ae9-c0ba-4a3c-b8f4-ca4c3c1ceab9',
    //         Logins: {
    //           'graph.facebook.com': response.authResponse.accessToken
    //         }
    //       });

    //       // Obtain AWS credentials
    //       AWSCognito.config.credentials.get(err => {
    //           if (err) {
    //              alert("alert: " + err);
    //              return;
    //           }
    //           console.log(AWSCognito.config.credentials.accessKeyId);
    //           console.log(AWSCognito.config.credentials.secretAccessKey);
    //           console.log(AWSCognito.config.credentials.sessionToken);
    //           // this.response = "Cognito Identity Id", AWS.config.credentials.identityId 
    //           // setTimeout(()=>{},0);
    //           // alert("Cognito Identity Id", AWS.config.credentials.identityId);

    //           var apigClient = apigClientFactory.newClient({
    //             defaultContentType: 'application/json',
    //             defaultAcceptType: 'application/json',
    //             accessKey: AWSCognito.config.credentials.accessKeyId,
    //             secretKey: AWSCognito.config.credentials.secretAccessKey,
    //             sessionToken: AWSCognito.config.credentials.sessionToken, //OPTIONAL: If you are using temporary credentials you must include the session token
    //             region: 'ap-northeast-1' // OPTIONAL: The region where the API is deployed, by default this parameter is set to us-east-1
    //           });


              
    //           var params = {
    //             //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
    //               // 'Content-Type': 'application/json',
    //               // 'headers': 'Content-Type: application/json',
    //                headers: {
    //                   'Content-Type': 'application/json'
    //               },

    //           };

    //           apigClient.graphqlPost({}, {"query": "{hello}"}, {})
    //             .then(response => console.log(response))
    //             .catch(err => console.log(err))


    //       });

    //     } else {
    //       console.log('There was a problem logging you in.');
    //     }


    // });
  }

  logout() {
    // FB.logout(response => {console.log(response)}); 
  }
}

