import { Component } from '@angular/core';
import { SeeAddressService } from './see-address.service';

export interface AddressDomain {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

@Component({
  selector: 'app-see-address',
  templateUrl: './see-address.component.html',
  styleUrls: ['./see-address.component.scss']
})
export class SeeAddressComponent {
  cep = ''
  address = {} as AddressDomain

  constructor(private seeAddressService: SeeAddressService) {}

  onInputChange() {
    this.seeAddressService.loadAddressByCep(this.cep).subscribe(address => this.address = address)
  }
}
