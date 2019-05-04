import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'], 
})
export class Tab4Page implements OnInit {


  constructor(
    public storageServ: StorageService
  ) { }

  ngOnInit() {
  }

}
