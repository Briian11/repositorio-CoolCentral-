import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'nabvar', component: NabvarComponent},
    { path: 'product', component: ProductComponent},
    { path: 'cart', component: CartComponent},
    {path: 'log-in', component: LogInComponent},
    { path: 'footer', component: FooterComponent},
    {path: 'about-us', component: AboutUsComponent},
    { path: '**', component: PageNotFoundComponent },
];


