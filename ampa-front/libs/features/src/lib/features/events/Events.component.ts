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
import { Ampa, Event, EventsService, MessageService } from '@ampa-front/shared';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'lib-events',
  standalone: true,
  imports: [CommonModule, ClarityModule, HttpClientModule, FormsModule],
  templateUrl: './Events.component.html',
  styleUrl: './Events.component.css',
})
export class EventsComponent {
  public selected?: Event;
  public opened: boolean = false;
  public titular: any;
  public texto: any;
  public imagen: any;
  public events?: Event[] = new Array();

  constructor(
    public router: Router,
    public eventService: EventsService,
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
    this.eventService.getEvents().subscribe((events) => (this.events = events));
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

    let eventAux: Event = {
      idEvent: 0,
      titular: this.titular,
      text: this.texto,
      image: '',
      createdAt: '',
    };
    if (this.selected != undefined) eventAux.idEvent = this.selected.idEvent;
    this.eventService.postEvents(eventAux).subscribe((events) => {
      this.ngOnInit();
      this.selected = undefined;
      this.opened = false;
    });
  }

  onEdit() {
    if (this.selected?.idEvent) {
      this.opened = true;
      this.titular = this.selected?.titular;
      this.texto = this.selected?.text;
    }
  }
  onDelete(): void {
    if (this.selected?.idEvent)
      this.eventService.deleteEvent(this.selected.idEvent).subscribe(() => {
        this.opened = false;
        this.selected = undefined;
        this.ngOnInit();
      });
  }

  onAdd() {
    this.selected = undefined;
    this.opened = true;
  }

  formatFecha(event: Event): string {
    return (
      event.createdAt[2] + '/' + event.createdAt[1] + '/' + event.createdAt[0]
    );
  }
  hasSelectedValue() {
    //    console.log('hasSelectedValue: ' + this.selected);
    return this.selected ? false : true;
  }
}
