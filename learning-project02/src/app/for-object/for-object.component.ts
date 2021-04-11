import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-object',
  templateUrl: './for-object.component.html',
  styleUrls: ['./for-object.component.scss']
})
export class ForObjectComponent implements OnInit {

  newVn = '';
  newEn = "";

  isShow = false;

  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ];

  remove(id:any){
    let count = 0;
    for(let i = 0; i < this.arrWords.length;i++){
      if(this.arrWords[i].id == id){
        count = i;
        break;
      }
    }
    this.arrWords.splice(count,1);
  }

  constructor() { }

  themTuMoi(){
    if(this.newVn.length != 0 && this.newEn.length!= 0){
      this.arrWords.unshift({
        id:this.arrWords.length+1,
        en:this.newEn,
        vn:this.newVn,
        memorized:false
      });
      this.newEn = '';
      this.newVn = "";
      this.isShow = false;
    }
  }

  ngOnInit(): void {
  }

  getStyles(check: boolean) {
    if (check) {
      return { color: 'red' };
    } else {
      return { color: 'green' };
    }
  }

}

