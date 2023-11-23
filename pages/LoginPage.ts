export class LoginPage {
 
  page: any
  password_textbox: any
  username_textbox: any
  login_button: any
  errormessage: any
  wrongPassworderror: any

  constructor(page) {

      this.page = page
      this.username_textbox = page.getByLabel('Username');
      this.password_textbox = page.getByLabel('Password');
      this.login_button = page.getByRole('button', { name: ' Login' });
      this.errormessage=page.getByText('Your username is invalid! ×');
      this.wrongPassworderror=page.getByText('Your password is invalid! ×');

  }

  
  async gotoLoginPage(){
    await this.page.goto('https://the-internet.herokuapp.com/login');
}

  async login(username, password){
      await this.username_textbox.fill(username);
      await this.password_textbox.fill(password);
      await this.login_button.click();
  }

 
}