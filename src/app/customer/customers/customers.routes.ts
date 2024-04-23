import { Route } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { CustomerListComponent } from "../customer-list/customer-list.component";
import { CustomerDetailComponent } from "../customer-detail/customer-detail.component";
import { CustomerFormComponent } from "../customer-form/customer-form.component";

export const CUSTOMER_ROUTES: Route[] = [
  {path: '', component: CustomersComponent, 
  children: [
    { path: 'customers', component: CustomerListComponent},
    { path: 'detail/:id', component: CustomerDetailComponent },
    { path: 'new', component: CustomerFormComponent },
    { path: 'edit/:id', component: CustomerFormComponent }
  ]
  },

]