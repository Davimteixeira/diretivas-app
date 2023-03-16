import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit{

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public login: boolean = true;
  public list: Array<{nome: string, idade:number}> = [
    { nome: "Davi Magalhães", idade:18 },
    { nome: "Davi Teixeira", idade:19 }];

  public nome: string = "Antonio";

  public cars: any[] = [
    {"name": "celta", "color": "azul"},
    {"name": "celta", "color": "amarelo"},
    {"name": "celta", "color": "verde"},
    {"name": "celta", "color": "vermelho"},
  ]

  constructor() {}

  ngOnInit() {
    setInterval( ()=> {
      if (this.condition){
      this.condition = false;
      }else{
        this.condition = true;

      }
    },2000)
  }
  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
  }else{
    this.conditionClick = true;
  }

 }

 public onClickAdd() {
  this.list.push({ nome:'Davi', idade:18 })
 }

 public onClickDel() {
  this.list.pop()
 }
}
