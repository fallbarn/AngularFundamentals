import { Injectable } from '@angular/core'

// SLE note: a forward declaration to satisfies typescript that there will be a global symbol to link to.


declare let toastr: any;

@Injectable()
export
  class ToastrService {

  success(message: string, title?: string) {
    toastr.success(message, title);
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
