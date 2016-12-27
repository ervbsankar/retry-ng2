import  {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule} from "./app.module";
import {enableProdMode, LOCALE_ID} from "@angular/core";
import {appRoutingProviders} from "./app.routes";

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule,[{provide: LOCALE_ID, useValue:"en-US"},appRoutingProviders])
    .catch((err : any) => console.error(err))
;