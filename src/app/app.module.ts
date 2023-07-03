import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsSectionPageComponent} from './pages/products-section-page/products-section-page.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ProductsDetailPageComponent} from './pages/products-detail-page/products-detail-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AdminPageComponent} from './pages/admin/admin-page/admin-page.component';
import {
  AdminProductsSectionPageComponent
} from './pages/admin/admin-products-section-page/admin-products-section-page.component';
import {
  AdminProductsDetailPageComponent
} from './pages/admin/admin-products-detail-page/admin-products-detail-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {AuthorizationPageComponent} from './pages/authorization-page/authorization-page.component';
import {HeaderComponent} from './shared/components/layouts/header/header.component';
import {FooterComponent} from './shared/components/layouts/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxsModule} from '@ngxs/store'
import {UserState} from "./shared/state/user/user.state";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    ProductsSectionPageComponent,
    HomePageComponent,
    ProductsDetailPageComponent,
    ProfilePageComponent,
    AdminPageComponent,
    AdminProductsSectionPageComponent,
    AdminProductsDetailPageComponent,
    NotFoundPageComponent,
    AuthorizationPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([UserState], {
      developmentMode: true
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'user'
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
