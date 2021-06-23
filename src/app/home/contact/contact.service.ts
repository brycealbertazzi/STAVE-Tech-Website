import { Injectable } from '@angular/core';
import { ContactModule } from '../../contact/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: ContactModule[] = [];
  setContacts() {
    this.contacts.push(new ContactModule(
      "Parris Grundy",
      "https://snipboard.io/hoLnwF.jpg",
      "Founder & CEO"
    ));
    this.contacts.push(new ContactModule(
      "Bryce Albertazzi",
      "https://snipboard.io/hoLnwF.jpg",
      "Lead Software Developer"
    ));
  }
  getContacts() {
    return this.contacts;
  }
}
