import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {

    if(!address||
      !address.cidade||
      !address.cidade||
      !address.estado||
    address === null ||
    address === undefined) {
      return "Endereço indisponível ou inválido"
    }

    return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`;
  }

}
