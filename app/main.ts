import  {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule} from "./app.module";
import { enableProdMode } from "@angular/core";
import {appRoutingProviders} from "./app.routes";

enableProdMode();
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule,[appRoutingProviders])
    .catch((err : any) => console.error(err))
;