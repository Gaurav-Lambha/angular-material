import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Unauthorized401Component } from './unauthorized-401/unauthorized-401.component';
import { NotFound404Component } from './not-found-404/not-found-404.component';
import { InternalServerError500Component } from './internal-server-error-500/internal-server-error-500.component';
import { BadRequest400Component } from './bad-request-400/bad-request-400.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    exports: [
        BadRequest400Component,
        InternalServerError500Component,
        NotFound404Component,
        Unauthorized401Component
    ],
    declarations: [
        BadRequest400Component,
        InternalServerError500Component,
        NotFound404Component,
        Unauthorized401Component
    ],
})
export class ErrorModule { }
