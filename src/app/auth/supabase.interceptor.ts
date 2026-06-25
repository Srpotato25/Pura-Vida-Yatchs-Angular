import { environment } from '../../environments/environment';
import { HttpInterceptorFn } from '@angular/common/http';

export const supabaseInterceptor: HttpInterceptorFn = (req, next) => {
  const supabaseReq = req.clone({
    setHeaders: {
      'apikey': environment.supabaseAnonKey,
      'Authorization': `Bearer ${environment.supabaseAnonKey}`
    }
  });
  return next(supabaseReq);
};

export class SupabaseHttpClient {

}
