import {
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, tap } from 'rxjs';

export function spinInterceptor(req: HttpRequest<any>, next: HttpHandlerFn) {
  let spiner = inject(NgxSpinnerService);
  let modifiesReq = req;
  spiner.show();
  return next(modifiesReq).pipe(
    finalize(() => {
      spiner.hide();
    })
  );
}
