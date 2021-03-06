import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitizeURL',
})
export class NoSanitizeURLPipe implements PipeTransform {


  constructor(
    private sanitizer: DomSanitizer,
  ) { }

  transform(value) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }

}
