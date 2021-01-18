
import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DataService } from './data.service';

describe('DataService', () => {
  const mockResponse = [{ userId: 1, id: 1, title: "delectus aut autem", completed: false }];
  let service: DataService;
  let httpMock = TestBed.get(HttpTestingController);;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

  });

  it('should be created', inject([service], () => {
    expect(service).toBeTruthy();
  }));

  it('API getDATA should be tested', inject([service], () => {


    /*  service.getTodoList().then(res => {
       expect(res.lengh).toBe(10);
       expect(res).toEqual(mockResponse);
     }) */



  }));

  it('should be created', () => {
    const request = httpMock.expectNone('https://jsonplaceholder.typicode.com/todos');
    expect(request.request.method).toBe("GET");
    request.flush(mockResponse);
  });


});
