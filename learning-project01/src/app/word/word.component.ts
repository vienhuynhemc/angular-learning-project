import {Component} from '@angular/core'

@Component({
    selector: 'app-word',
    templateUrl: './word.component.html',
    styleUrls: ['./word.component.scss']
})

export class WordComponent{
    en= "hello";
    vn = "xinchao";
    hidden = false;
    srcImg = "https://www.charlotteobserver.com/latest-news/wikp4c/picture248009850/alternates/FREE_1140/imgmaxpreps.jpg"

    changeHidden(){
        if(this.hidden){
            this.hidden = false;
        }else{
            this.hidden =true;
        }
    }

};