import { Component, ElementRef, OnInit, ViewChild , Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SockectService } from '../../services/socket/sockect.service';

@Component({
  selector: 'app-room-forum',
  templateUrl: './room-forum.component.html',
  styleUrls: ['./room-forum.component.css']
})
export class RoomForumComponent implements OnInit {

  room: any

  message : string

  names_suername : any 
  photo_path : any 

  @ViewChild('messageForm')messageForm : ElementRef
  @ViewChild('chat')chat : ElementRef


  constructor(
    private activeRoute: ActivatedRoute,
    private cookie : CookieService,
    public socketservice : SockectService,
    private render2 : Renderer2,
  ) { }

  ngOnInit() {
   this.room =  this.activeRoute.snapshot.paramMap.get('room')
   localStorage.setItem('name_room' , this.room)
    this.names_suername = localStorage.getItem('nameuser')
   this.photo_path = localStorage.getItem('photo')
  }

  sendmessage(e : any ) {
    this.messageForm.nativeElement.focus();
    e.preventDefault()
    const dataUsermessage = {
      message : this.message ,
      username : this.names_suername,
      img : this.photo_path
    }
    const form = {
      message : this.message,
      hora_envio : '',
      user_id : '',
      forum_id : ''
    }
    this.socketservice.Emiter(dataUsermessage)

    this.message = ''
  }


}
