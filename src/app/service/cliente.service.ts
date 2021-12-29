import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../modelo/cliente";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class ClienteService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiServiceUrl}/api/clientes`)
  }

  public adicionar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiServiceUrl}/api/clientes`, cliente);

  }

  public deletar(id: number) {
    return this.http.delete<void>(`${this.apiServiceUrl}/api/clientes/${id}`);
  }
}
