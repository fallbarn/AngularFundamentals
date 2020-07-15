import { Injectable } from '@angular/core'

// SLE note: a forward declaration to satisfy typescript. There will be a global symbol to link to when finally used.
declare let toastr: any;

@Injectable()
export class ToastrService {

  success(message: string, title?: string) {
    toastr.success(message, 'test');
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
