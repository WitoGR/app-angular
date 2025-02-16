import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
import {ContactComponent} from './contact/contact.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'produtos',
    component: ProductsComponent,
  },
  {
    path: 'contato',
    component: ContactComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
