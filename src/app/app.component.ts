import { Component  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})

export class AppComponent  {
  title = 'listaRu';
  /**Estrutura para o array com os dados dos alunos */
  alunos: Array<any>;
  constructor(){
    this.alunos=[{
      nome:"André Luis Santos",
      RU: 3312505,
      curso:"Analise e Desenvolvimento de Sistemas",
      nasc:"02/11/1986"
    },
    {
      nome:"Joao Souza",
      RU: 3423616,
      curso:"Tecnologia em Logistica",
      nasc:"03/12/1988"
    },
    {
      nome:"Maria de Oliveira",
      RU: 3534727,
      curso:"Tecnologia em Design de Games",
      nasc:"09/05/1989"
    },
    {
      nome:"Luiz Carlos Silva",
      RU: 4645838,
      curso:"Bacharelado em Jornalismo",
      nasc:"23/09/1995"
    },
    {
      nome:"Rayssa Padilha",
      RU: 4656908,
      curso:"Bacharelado em Engenharia Eletrica",
      nasc:"11/02/1998"
    }];
  }  
}