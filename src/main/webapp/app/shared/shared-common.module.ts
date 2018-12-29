import { NgModule } from '@angular/core';

import { JHipsterBookstoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JHipsterBookstoreSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JHipsterBookstoreSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JHipsterBookstoreSharedCommonModule {}
