import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string){};
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService() {
    // return this.http.get('http://localhost:8080/hello-world-bean');
    //Generics
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service ");
  }


  //hello-world/path-variable/{name}
  //hello-world/path-variable/Rao
  executeHelloWorldBeanServiceWithPathVariable(name) {
      
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    // return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    //         {headers});

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`);
  }


  // createBasicAuthenticationHttpHeader() {
  //   let username = 'Rao';
  //   let password = 'dummy';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password); 
    
  //   return basicAuthHeaderString;
  // }

}
