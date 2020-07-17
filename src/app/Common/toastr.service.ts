import {InjectionToken} from '@angular/core'
//import { Injectable } from '@angular/core'

// SLE note: a forward declaration to satisfy typescript. There will be a global symbol to link to when finally used.
//declare let toastr: any; // sle note: moved to app.module when used with token style dependency injection.

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')

export interface Toastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}

//@Injectable()
//export class ToastrService {

//  success(message: string, title?: string) {
//    toastr.success(message);
//  }

//  info(message: string, title?: string) {
//    toastr.info(message, title);
//  }

//  warning(message: string, title?: string) {
//    toastr.warning(message, title);
//  }

//  error(message: string, title?: string) {
//    toastr.error(message, title);
//  }
//}
