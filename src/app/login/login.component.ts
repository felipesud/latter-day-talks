import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) { }

  login() {
    // Verifique as credenciais do usuário aqui
    if (this.username === 'admin' && this.password === 'admin') {
      // Redirecione para a página principal se as credenciais estiverem corretas
      this.router.navigate(['/home']);
    } else {
      // Caso contrário, exiba uma mensagem de erro ao usuário
      alert('Credenciais inválidas!');
    }
  }

}
