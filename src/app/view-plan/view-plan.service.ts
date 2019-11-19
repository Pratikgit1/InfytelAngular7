import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlanDetail } from './plan';
import { RestService } from './../rest.service';
import { InformationService } from './../information.service';

@Injectable()
export class ViewPlanService {

    constructor(private informationService: InformationService, private restService: RestService) { }

    viewPlan(): Observable<PlanDetail[]> {
        return this.restService.get(this.informationService.viewPlanUrl);
    }
}
