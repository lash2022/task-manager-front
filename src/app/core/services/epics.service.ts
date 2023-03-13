import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { IEpic } from '../interfaces/epic';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EpicsService extends BaseService {


  createEpic(epic:Iepic){
    return this.post<Iepic>('epics',epic)
  }

  getAllEpics(){
    return this.get<IEpic[]>('epics')
  }


}
