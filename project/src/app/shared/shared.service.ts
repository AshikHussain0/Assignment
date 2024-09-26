import { Injectable } from '@angular/core';
import { ProcessDetails } from './shared.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  assetLevel!: string;
  siteName!: string[];
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinnerStatus = this.spinnerSubject.asObservable();



  processDetails: ProcessDetails[] = [
    {
      siteName: 'Site 1',
      plants: [
        {
          plantName: 'Mining',
          process: ['Beneciation', 'Excavation']
        },
        {
          plantName: 'Material prep & Auxiliary',
          process: ['Coal processing', 'Coke oven']
        },
        {
          plantName: 'Iron making',
          process: ['Blast Furnace', 'Pig iron casting']
        },
        {
          plantName: 'Steel making',
          process: ['Argon oxygen Decarburization', 'CC Beam']
        }
      ]
    },
    {
      siteName: 'Site 2',
      plants: [
        {
          plantName: 'Mining',
          process: ['Beneciation', 'Excavation']
        },
        {
          plantName: 'Material prep & Auxiliary',
          process: ['Coal processing', 'Coke oven']
        },
        {
          plantName: 'Iron making',
          process: ['Blast Furnace', 'Pig iron casting']
        },
        {
          plantName: 'Steel making',
          process: ['Argon oxygen Decarburization', 'CC Beam']
        }
      ]
    },
    {
      siteName: 'Site 3',
      plants: [
        {
          plantName: 'Mining',
          process: ['Beneciation', 'Excavation']
        },
        {
          plantName: 'Material prep & Auxiliary',
          process: ['Coal processing', 'Coke oven']
        },
        {
          plantName: 'Iron making',
          process: ['Blast Furnace', 'Pig iron casting']
        },
        {
          plantName: 'Steel making',
          process: ['Argon oxygen Decarburization', 'CC Beam']
        }
      ]
    },
  ];

/**
  * Method to show the spinner
  */
   show(): void {
    this.spinnerSubject.next(true);
  }

 /**
  * Method to hide the spinner
  */
  hide(): void {
    this.spinnerSubject.next(false);
  }
}
