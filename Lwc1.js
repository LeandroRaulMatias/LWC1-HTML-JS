import { LightningElement } from "lwc";
export default class App extends LightningElement {
 
 //criar variaveis e atributos.

  Aempresa = "Leleco Corp";
  Acnpj = "000.111.222-23";
  Aendereco = "Rua dos Inocentes, 696";

  Bproduto = "Leite";
  Bdescricao = "Leite LECO";
  Bpreco = "R$ 4,50";


Coferta1 = "10% de desconto"
Coferta2 = "20% de desconto"
		

  /*
    Crie as variaveis com os valores para telefone cpf
    idade e exibir no card
  */

  
  visible = true;
  visible1 = true;
  //visible2 = true;
  
  trocarDiv(){
    this.visible = !this.visible;
    
  }
  trocarDiv1(){
   
    this.visible1 = !this.visible1;
  }
  /*trocarDiv2(){
   
    this.visible2 = !this.visible2;
  }*/
 

}
