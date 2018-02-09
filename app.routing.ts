import {RouterModule, Routes, PreloadAllModules} from "@angular/router";

const routes: Routes = [
    { path: '', loadChildren: './main/main.module#MainModule' }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: PreloadAllModules
});

