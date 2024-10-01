import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ClarityIcons,
  userIcon,
  newIcon,
  coinBagIcon,
  plusIcon,
  timesIcon,
  checkIcon,
  pencilIcon,
} from '@cds/core/icon';
import { ClarityModule } from '@clr/angular';
import { Router } from '@angular/router';
import { Ampa, Discount, DiscountService, MessageService } from '@ampa-front/shared';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-discount',
  standalone: true,
  imports: [CommonModule, ClarityModule, HttpClientModule, FormsModule],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.css',
})
export class DiscountsComponent implements AfterViewChecked {
  public selected?: Discount;
  public opened: boolean = false;
  public titular: any;
  public texto: any;
  public imagen: any;
  public discounts?: Discount[] = new Array();

  constructor(
    public router: Router,
    public discountService: DiscountService,
    private cd: ChangeDetectorRef,
    public messageService: MessageService,
  ) {
    ClarityIcons.addIcons(
      userIcon,
      newIcon,
      coinBagIcon,
      plusIcon,
      timesIcon,
      checkIcon,
      pencilIcon,
    );
  }
  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.messageService.clear();
    this.discountService.getDiscounts().subscribe((discounts) => (this.discounts = discounts));
  }

  closeModal() {
    this.opened = false;
    this.selected = undefined;
  }

  save() {
    let ampaAux: Ampa = {
      idAmpa: 1,
      name: '',
      description: '',
      address: '',
      email: '',
      phone: '',
    };

    let discountAux: Discount = {
      idDiscount: 0,
      titular: this.titular,
      text: this.texto,
      image: '',
      createdAt: '',
    };
    if (this.selected != undefined) discountAux.idDiscount = this.selected.idDiscount;
    this.discountService.postDiscount(discountAux).subscribe((discounts) => {
      this.ngOnInit();
      this.selected = undefined;
      this.opened = false;
    });
  }

  onEdit() {
    if (this.selected?.idDiscount) {
      this.opened = true;
      this.titular = this.selected?.titular;
      this.texto = this.selected?.text;
    }
  }
  onDelete(): void {
    if (this.selected?.idDiscount)
      this.discountService.deleteDiscount(this.selected.idDiscount).subscribe(() => {
        this.opened = false;
        this.selected = undefined;
        this.ngOnInit();
      });
  }

  onAdd() {
    this.selected = undefined;
    this.opened = true;
  }

  formatFecha(discount: Discount): string {
    return (
      discount.createdAt[2] + '/' + discount.createdAt[1] + '/' + discount.createdAt[0]
    );
  }
  hasSelectedValue() {
    //    console.log('hasSelectedValue: ' + this.selected);
    return this.selected ? false : true;
  }
}
