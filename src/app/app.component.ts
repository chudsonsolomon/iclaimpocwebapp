import { Component } from '@angular/core';
import { MyMonitoringService } from './framework/logging/monitoring.service';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(private myMonitoringService: MyMonitoringService) {
	}
 }
