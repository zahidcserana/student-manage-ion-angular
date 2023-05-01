export class Student {
  number: string = ''
  name: string = ''
  email: string = ''
  mobile: string = ''
  address: string = ''
  createdAt: string = ''
}

export class StudentData {
  type: string = '';
  id: number = 0;
  attributes: Student = {
    number: '',
    name: '',
    email: '',
    mobile: '',
    address: '',
    createdAt: '',
  };
}

export interface ApiResponse {
  meta: any;
  jsonapi: any;
  links: any;
  data: any;
}

export class ApiData {

}

export class StudentModel {
  id = 0
  number = ''
  name = ''
  email = ''
  mobile = ''
  address = ''
  createdAt = ''
}

export class PageInfo {
  currentPage = 1
  from = 1
  lastPage = 1
  perPage = 10
  to = 10
  total = 0
}