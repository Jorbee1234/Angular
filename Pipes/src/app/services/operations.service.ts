import { Injectable } from "@angular/core";
import { OperationsListResponse } from "../types/operations-list-response.type";
import { OperetionsListResponseMock } from "../mocks/operations-list-responde.mock";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OperationsService{
  getOperations(): Observable<OperationsListResponse>{
    return of(OperetionsListResponseMock);
  }
}
