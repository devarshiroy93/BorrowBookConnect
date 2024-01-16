import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';


type DefaultUsageSettings = {
  usage: 'default',
  options: any[],
  bindKey: string,
  placeholder: string,
  trackBy: string
}

type CustomSettings = {
  usage: 'custom'
  placeholder: string,
  bindKey : string
  
}

export type DropdownSettings = DefaultUsageSettings | CustomSettings;

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {

  showOptionsPanel: boolean = false;

  selectedItem: any = {};

  @Input()
  optionsTemplate?: TemplateRef<any> | null = null;

  @Input({ required: true })
  settings: DropdownSettings = { usage: 'default', placeholder: '', options: [], bindKey: '', trackBy: 'id' };

  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();

  toggleOptionsPanel() {
    this.showOptionsPanel = !this.showOptionsPanel;
  }

  selectItem(value: any) {
    this.selectedItem = value;
    this.select.emit(value);
    this.toggleOptionsPanel();
  }

}
