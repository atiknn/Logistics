import { Component, OnInit } from '@angular/core';
import { DownloadService } from 'app/shared/services/BookDownload.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.scss']
})
export class GenerateInvoiceComponent implements OnInit {

  constructor(
    private _download: DownloadService,
    private _AR: ActivatedRoute,
    ) { }

  data;
  pname;

  ngOnInit() {
    this._AR.params.subscribe(data=>{this.pname = data['id']});
    this._download.getDownload(this.pname).subscribe(data => this.downloadFile(data)),
    error => console.log("Error downloading the file."),
    () => console.log("Error");
  }

  downloadFile(data){
    var url = window.URL.createObjectURL(new Blob([data]));
     // Debe haber una manera mejor de hacer esto...
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = 'Articulos.xlsx';
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

}
