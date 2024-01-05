import { Component, OnInit } from '@angular/core';
import { ISanInputComponent, InputType, LabelPositions } from '@sanitas-common-components/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public roundBorderInputConfig: ISanInputComponent = {} as ISanInputComponent;

  ngOnInit(): void {
    this.roundBorderInputConfig = {
      placeHolder: 'Input con Round border with endIcon',
      type: InputType.TEXT,
      qa: 'qa-bank',
      labelText: 'Input con bordes redondos',
      labelPosition: LabelPositions.FLOATING,
      required: false,
      helpertext: 'Input con bordes redondos'
    };
  }

}
