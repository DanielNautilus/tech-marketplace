import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProductsSectionPageComponent} from "./pages/products-section-page/products-section-page.component";
import {ProductsDetailPageComponent} from "./pages/products-detail-page/products-detail-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AdminPageComponent} from "./pages/admin/admin-page/admin-page.component";
import {
  AdminProductsSectionPageComponent
} from "./pages/admin/admin-products-section-page/admin-products-section-page.component";
import {
  AdminProductsDetailPageComponent
} from "./pages/admin/admin-products-detail-page/admin-products-detail-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {AuthorizationPageComponent} from "./pages/authorization-page/authorization-page.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AdminGuard} from "./shared/guards/admin.guard";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: "full"
  },
  {
    path: 'catalog',
    component: ProductsSectionPageComponent,
    data: {
      title: 'Товары'
    }
  },
  {
    path: 'catalog/:id',
    component: ProductsDetailPageComponent,
    data: {
      title: 'Товар'
    }
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Администрирование'
    }
  },
  {
    path: 'admin/items',
    component: AdminProductsSectionPageComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Администрирование | товары'
    }
  },
  {
    path: 'admin/items/:id',
    component: AdminProductsDetailPageComponent,
    canActivate: [AdminGuard],
    data: {
      title: 'Администрирование | товар'
    }
  },
  {
    path: 'auth',
    component: AuthorizationPageComponent,
    data: {
      title: 'Авторизация'
    }
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Профиль'
    }
  },
  {
    path: '**',
    component: NotFoundPageComponent,
    data: {
      title: 'Неизвестная страница'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
