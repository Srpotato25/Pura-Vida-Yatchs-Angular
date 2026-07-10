import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'top-menu',
  imports: [RouterLink],
  templateUrl: './top-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenu {}
