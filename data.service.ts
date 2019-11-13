import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  GetData()
  {
    return this.http.get("http://13.233.157.83:5000/students");
  }
  GetDataById(Rollno)
  {
    return this.http.get("http://13.233.157.83:5000/students/"+Rollno);
  }

  AddData(stdObject)
  {
    return this.http.post("http://13.233.157.83:5000/students/",stdObject);
  }
  Delete(Rollno)
  {
    return this.http.delete("http://13.233.157.83:5000/students/"+Rollno);
  }
}
