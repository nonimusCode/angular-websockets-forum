import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../../services/forum/forum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listForums: any[] = [];

  constructor(
    private servicesForum: ForumService,
    private routingServer: Router,
  ) { }

  ngOnInit() {
    this.getAllForums()
  }

  getAllForums() {
    this.servicesForum.getALlForums().subscribe(forums => {
      this.listForums = forums.results
    })
  }

  irAForo(id_foro: any, quesion: any) {
    this.routingServer.navigate([`/roomForum/${id_foro}.${quesion}`])
  }
  Home(): void {
    window.location.reload()
  }

}
