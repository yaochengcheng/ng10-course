import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import {TagModule} from '../../share/components/tag/tag.module';
import {DirectivesModule} from '../../share/directives/directives.module';
import {PipesModule} from '../../share/pipes/pipes.module';
import {SizerComponent} from './sizer/sizer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [AlbumComponent, SizerComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    TagModule,
    DirectivesModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlbumModule { }
