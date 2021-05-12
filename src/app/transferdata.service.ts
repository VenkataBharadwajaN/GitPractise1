import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {
  // Between Home And ContactUs
  data=false;
  constructor() { }
  setData(value)
  {
    this.data=value;
  }
  getData()
  {
    return this.data;
  }
}
