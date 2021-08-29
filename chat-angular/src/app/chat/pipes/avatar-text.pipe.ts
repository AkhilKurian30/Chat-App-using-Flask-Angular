import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarText',
})
export class AvatarTextPipe implements PipeTransform {

  transform(username: string): string {
    if (username ) {
      const nameArray=username.split(' ');
      const firstname=nameArray[0];
      const lastname=nameArray.length>1?nameArray[1]:' ';
      return  firstname[0]+ lastname[0];
    }
    return 'UKn';
  }

}
