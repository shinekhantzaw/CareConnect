import { Injectable } from '@angular/core';
import { Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private readonly resources: Resource[] = [
    {
      id: 1,
      name: "St. Mary's Soup Kitchen",
      category: 'Food',
      address: '1101 S Lafayette St, Fort Wayne, IN 46802',
      phone: '(260) 426-3543',
      description: 'Daily hot meals and pantry support for neighbors facing food insecurity.',
      isEmergency: false
    },
    {
      id: 2,
      name: "Shepherd's House",
      category: 'Housing',
      address: '519 Tennessee Ave, Fort Wayne, IN 46805',
      phone: '(260) 423-1746',
      description: 'Emergency shelter and transitional housing support for men in crisis.',
      isEmergency: true
    },
    {
      id: 3,
      name: 'Park Center Crisis Services',
      category: 'Mental Health',
      address: '909 E State Blvd, Fort Wayne, IN 46805',
      phone: '(260) 471-9440',
      description: 'Behavioral health assessments, crisis response, and ongoing mental health care.',
      isEmergency: true
    },
    {
      id: 4,
      name: 'Fort Wayne Recovery',
      category: 'Addiction',
      address: '310 E Dupont Rd, Fort Wayne, IN 46825',
      phone: '(260) 498-7773',
      description: 'Peer recovery coaching, treatment referrals, and addiction support services.',
      isEmergency: false
    },
    {
      id: 5,
      name: 'Brightpoint Supportive Services',
      category: 'Housing',
      address: '227 E Washington Blvd, Fort Wayne, IN 46802',
      phone: '(260) 423-3546',
      description: 'Housing navigation, utility assistance, and family stabilization services.',
      isEmergency: false
    }
  ];

  getResources(): Resource[] {
    return this.resources;
  }
}
