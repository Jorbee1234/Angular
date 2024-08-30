import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    if (status === undefined || status === null){
     return "Status indiponivel ou inválido";
    }

    return status ? 'Ativo' : 'Inativo';
  }

}
