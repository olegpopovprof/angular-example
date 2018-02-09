import {RouterModule, Routes} from "@angular/router";

import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {ExecutionLogsComponent} from "./components/execution-logs/execution-logs.component";

const mainRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'logs', component: ExecutionLogsComponent },
];

export const MainRouting = RouterModule.forRoot(mainRoutes);