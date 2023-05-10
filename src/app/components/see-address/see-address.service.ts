import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressDomain } from './see-address.component';

@Injectable()
export class SeeAddressService {
  constructor(private http: HttpClient) {  }

  loadAddressByCep(cep: string){
    if(cep.length === 8){
      return this.http.get<AddressDomain>(`https://viacep.com.br/ws/${cep}/json/`)
    } 

    return this.http.get<AddressDomain>(`https://viacep.com.br/ws/49075050/json/`)
  }

  createAddress(){
    this.http.post('url/da/api', {  }, { params: {  } })
  }
}

