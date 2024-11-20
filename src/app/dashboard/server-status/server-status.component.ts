import {Component, effect, OnInit, signal} from '@angular/core';
import {DashboardItemComponent} from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [
    DashboardItemComponent
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal(this.getMockStatus());

  constructor() {
    effect(() => {
      console.log("STATUS: " + this.currentStatus());
    });
  }

  ngOnInit() {
    this.currentStatus.set(this.getMockStatus());
    setInterval(() => {this.currentStatus.set(this.getMockStatus())}, 5000);
  }

  private getMockStatus() : 'online' | 'offline' | 'unknown'{
    let random = Math.floor(Math.random() * 101);
    if (random > 66) {
      return 'online';
    } else if (random <= 66 && random > 33) {
      return 'offline';
    } else {
      return 'unknown';
    }
  }


}
