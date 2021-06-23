import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule {
  name: String;
  image: String;
  role: String;
  phone: String;
  email: String;
  AddrBeg: String;
  AddrEnd: String;

  constructor(name: String, image: String, role: String, phone: String = null, email: String = null, AddrBeg: String = null, AddrEnd: String = null) {
    this.name = name;
    this.image = image;
    this.role = role;
    this.phone = phone;
    this.email = email;
    this.AddrBeg = AddrBeg;
    this.AddrEnd = AddrEnd;
  }
}
