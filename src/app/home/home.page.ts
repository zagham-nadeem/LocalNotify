import { Component, OnInit } from '@angular/core';
import{LocalNotifications,ScheduleOptions}from"@capacitor/local-notifications";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ids:number[]=[];
 resume:boolean=false;
  constructor(){}
  ngOnInit(){
    setInterval( ()=>{
      if(this.resume)
     {
      this.schedule();
      console.log('Test', this.ids)
     }
    },1000);
}
  
schedule() {
 var t = new Date();
  t.setSeconds(t.getSeconds()+5);
   let id=this.ids.length;
   this.ids.push(id);
  let options:ScheduleOptions={notifications:[{
    id:id,
    title:"Local Notifications id="+id,
    body:"Local Notifications body",
    // schedule:{
   // at:t,
   }]
}
if(this.resume){
{
 LocalNotifications.schedule(options).then(()=>{
   console.log('test')
  })
}
}
}}