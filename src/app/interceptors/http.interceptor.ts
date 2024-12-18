import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem('auth-token');
  
  if (authToken && !req.url.includes('login')) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
  }

  return next(req);
};
