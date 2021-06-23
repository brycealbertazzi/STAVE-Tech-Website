import { Component, OnInit } from '@angular/core';
import { ContactModule } from 'src/app/contact/contact.module';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: ContactModule[];

  constructor(
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactService.setContacts()
    this.contacts = this.contactService.getContacts()
  }

}
