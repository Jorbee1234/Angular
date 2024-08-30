import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersListByDate = (startDate: Date | undefined, endDate: Date | undefined, filteredList: IUser[]): IUser[] => {
  if(startDate === undefined || endDate === undefined){
    return filteredList;
  }

  return filteredList.filter((user) => isWithinInterval(new Date(user.dataCadastro), {start: startDate, end: endDate}));
}

const filterUsersListByStatus = (status: boolean | undefined, filteredList: IUser[]): IUser[] => {
  if(status === undefined){
    return filteredList;
  }

  return filteredList.filter((user)=>user.ativo === status);
}

const filterUsersListByName = (name: string | undefined, usersList: IUser[]): IUser[] => {
  if(name === undefined){
    return usersList;
  }

  return usersList.filter((user)=>user.nome.toLowerCase().includes(name.toLowerCase()));
}

const filterUsersList = (filterOptions: IFilterOptions, usersList: IUser[]):IUser[] =>{
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

  return filteredList
}

export {filterUsersList};
