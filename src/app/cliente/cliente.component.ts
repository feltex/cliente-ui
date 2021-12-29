import {Component, OnInit} from '@angular/core';
import {Cliente} from "../modelo/cliente";
import {ClienteService} from "../service/cliente.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) {
  }

  public clientes: Cliente[] = [];
  public clienteSelecionado: Cliente | undefined;

  ngOnInit(): void {
    this.listar();
  }

  public listar() {
    this.clienteService.listar().subscribe((response: Cliente[]) => {
        this.clientes = response;
        console.log(this.clientes);
      },
      (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    );
  }

  public add() {
    const cliente: Cliente = {
      dataCadastro: "",
      email: "",
      id: 0,
      matricula: "",
      nome: "",
      telefone: ""
    }
    this.clienteSelecionado = cliente;
    this.abrirDetalhe(this.clienteSelecionado, 'add');
  }

  public abrirDetalhe(cliente: Cliente, operacao: string) {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (operacao === 'add') {
      button.setAttribute('data-target', '#clienteModal');
    }
    if (operacao === 'edit') {
      this.clienteSelecionado = cliente;
      button.setAttribute('data-target', '#clienteModal');
    }
    if (operacao === 'delete') {
      this.clienteSelecionado = cliente;
      button.setAttribute('data-target', '#deleteClienteModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();

  }

  public filtrar(termo: string): void {
    console.log(termo);
    const results: Cliente[] = [];
    for (const cliente of this.clientes) {
      if (cliente.nome.toLowerCase().indexOf(termo.toLowerCase()) !== -1
        || cliente.email.toLowerCase().indexOf(termo.toLowerCase()) !== -1
        || cliente.telefone.toLowerCase().indexOf(termo.toLowerCase()) !== -1
        || cliente.matricula.toLowerCase().indexOf(termo.toLowerCase()) !== -1) {
        results.push(cliente);
      }
    }
    this.clientes = results;
    if (results.length === 0 || !termo) {
      this.listar();
    }
  }

  public salvarCliente(clienteForm: NgForm) {
    // @ts-ignore
    document.getElementById('btnFechar').click();
    this.clienteService.adicionar(clienteForm.value).subscribe(
      (response: Cliente) => {
        console.log(response);
        this.listar();
        clienteForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        clienteForm.reset();
      }
    );

  }

  public deletar(id: number | undefined): void {
    if (id) {
      this.clienteService.deletar(id).subscribe(
        (response: void) => {
          console.log(response);
          this.listar();
        },
        (error: HttpErrorResponse) => {
          console.error(error.message);
        }
      );
    }

  }
}
