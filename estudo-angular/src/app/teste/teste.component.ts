import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-teste', //nome da tag html para representar
  imports: [], //import de novos modulos terceiros
  templateUrl: './teste.component.html', //caminho do html da tela
  styleUrl: './teste.component.scss', //caminho do arquivo de stilização
})
export class TesteComponent { //classe do componente que será exportada

  // tipagem dinâmica: valor não explicitamente declarado, e mudança em tempo de execução de código.
  // tipagem estática: tipo explicito, tipo não muda em tempo de execução, os valores precisam ser do tipo declarado.
  // TS é uma linguagem estática. Tem base no JS, e novas funcionalidades, todos codigo ts é convertido em seu equivalente
  // em JS no compilador, pq os navgedaores não entendem o TS.
  // linguagens estáticas usam os compiladores para verificar, validar e reportar erros de tipagem. no TS é o TS Compiler.
  





}
