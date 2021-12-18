import { DataService } from './../data.service';
import { Component, OnInit, Input } from '@angular/core';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-sube-formulario',
  templateUrl: './sube-formulario.component.html',
  styleUrls: ['./sube-formulario.component.scss']
})
export class SubeFormularioComponent implements OnInit {
  prueba = "conexión lograda";
  // message:string;

  convertedJson: string;
  constructor() { }

  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => this.message = message);
  }

  // newMessage(){
  //   this.data.changeMessage("el mensaje se ha cambiado");
  //   console.log("intento cambiar el mensaje");
  // }

  handleClick() {
    document.getElementById('excel').click();
    // console.log("dio click");
  }

  arrayBuffer: any;
  file: File;
  incomingfile(event) {
    this.file = event.target.files[0];
  }

  formData: any = [];

  agregaExcel(fileInput: any) {
    const selectedFile = fileInput.target.files[0];
    // console.log(selectedFile.name);

    //CONVERTIR A JSON
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData, { type: 'binary' });
      workbook.SheetNames.forEach(sheet => {
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]); 
        // console.log(data);
        this.convertedJson = JSON.stringify(data, undefined, 4);
      })
      console.log(this.convertedJson);
    }

    // this.newMessage();

  }

}
