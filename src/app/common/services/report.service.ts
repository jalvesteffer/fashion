import { Injectable } from '@angular/core';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private server: ServerService) { }
  
  requestReport(url){
    return this.server.request("GET", "/accountant/reports/" + url)
  }

}
