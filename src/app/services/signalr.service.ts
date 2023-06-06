import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private hubConnection?:HubConnection
  private server:string="https://localhost:5000/hub"
  private token:string=""
  constructor() { }

  initSignlarConnection(){
    this.hubConnection=new HubConnectionBuilder()
      .withUrl(this.server,{
        accessTokenFactory:()=>this.token
      })
      .build()
  }
}
