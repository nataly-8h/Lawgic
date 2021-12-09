import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sube-formulario',
  templateUrl: './sube-formulario.component.html',
  styleUrls: ['./sube-formulario.component.scss']
})
export class SubeFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    document.getElementById('upload-file').click();
    // console.log("dio click");
  }
  
  addAttachment(fileInput: any) {
    const fileReaded = fileInput.target.files[0];
    //  handle the rest 
  }

}
