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
import { Ampa, News, NewsService } from '@ampa-front/shared';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../../../shared/src/lib/shared/services/message.service';

@Component({
  selector: 'lib-news',
  standalone: true,
  imports: [CommonModule, ClarityModule, HttpClientModule, FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent implements AfterViewChecked {
  public selected?: News;
  public opened: boolean = false;
  public titular: any;
  public texto: any;
  public imagen: any;
  public news?: News[] = new Array();

  constructor(
    public router: Router,
    public newsService: NewsService,
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
    this.newsService.getNews().subscribe((news) => (this.news = news));
    //console.log('ngOnInit: ' + this.selected);
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

    let newsAux: News = {
      idNew: 0,
      titular: this.titular,
      text: this.texto,
      image: '',
      createdAt: '',
    };
    if (this.selected != undefined) newsAux.idNew = this.selected.idNew;
    this.newsService.postNews(newsAux).subscribe((news) => {
      this.ngOnInit();
      this.selected = undefined;
      this.opened = false;
    });
  }

  onEdit() {
    if (this.selected?.idNew) {
      this.opened = true;
      this.titular = this.selected?.titular;
      this.texto = this.selected?.text;
    }
  }
  onDelete(): void {
    if (this.selected?.idNew)
      this.newsService.deleteNew(this.selected.idNew).subscribe(() => {
        this.opened = false;
        this.selected = undefined;
        this.ngOnInit();
      });
  }

  onAdd() {
    this.selected = undefined;
    this.opened = true;
  }

  formatFecha(news: News): string {
    return (
      news.createdAt[2] + '/' + news.createdAt[1] + '/' + news.createdAt[0]
    );
  }
  hasSelectedValue() {
    //    console.log('hasSelectedValue: ' + this.selected);
    return this.selected ? false : true;
  }
}
