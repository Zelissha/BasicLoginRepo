import { expect } from "@playwright/test";

export class SecureAreaPage{
page :any
 secureLoggedNotification: any

constructor(page) {

    this.page = page
    this.secureLoggedNotification=page.getByText('You logged into a secure area!')


}
async checkThePage(){

    return await this.secureLoggedNotification;
  
     


}





}