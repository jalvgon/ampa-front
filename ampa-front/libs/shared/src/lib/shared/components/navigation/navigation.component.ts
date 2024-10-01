import { Component, Input, OnInit } from '@angular/core';
import { ConfigurationService } from '../../services/configuration.service';
import { ClarityIcons, userIcon, newIcon, coinBagIcon } from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ClarityModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent implements OnInit {

  private apiURL: string ="";

  //@Input() usuario?:string;

  constructor(public router: Router){



    ClarityIcons.addIcons( userIcon, newIcon, coinBagIcon);
  }


  ngOnInit(): void {

  }

click(opcion:String){
  console.log("OPCION :" + opcion)
}


}
