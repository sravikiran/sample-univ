import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsviewComponent } from './details/detailsview/detailsview.component';

let routes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'details/:id',
		component: DetailsviewComponent
	}
];

const routesModule = RouterModule.forRoot(routes);
export { routesModule };
