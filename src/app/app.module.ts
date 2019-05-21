import { DeleteEventComponent } from './deletevent/deletevent.component';
import { SuccessEventComponent } from './success-event/success-event.component';
import { NavigatorComponent } from './navbar/navbar.component';
import { EventsCreateComponent } from './events-create/events-create.component';
import { DestinationListComponent } from './destination-list/destination-list.component';

import { WebFormComponent } from './webform/webform.component';
import { SampleComponent } from './sample/sample.component';
import { UserProfile } from './userprofile/userprofile.component';
import { AuthenticationService } from './login/authentication.service';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { WhenWhereComponent } from './secondpage/secondpage.component';
import { MainPageComponent } from './mainpage/mainpage.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { TripWithUsComponent } from './tripwithus/tripwithus.component';
import { App, NavController } from 'ionic-angular';
import { EventComponent } from './events/events.component';
import { EventsDetailComponent } from './events-detail/events-detail.component';
import { EventsEditComponent } from './events-edit/events-edit.component';
import { SuccessComponent } from './success/success.component';
import { UserEventComponent } from './user-event/user-event.component';
import { UserDestComponent } from './user-dest/user-dest.component';
import { DeleteComponent } from './delete/delete.component';

const appRoutes: Routes = [
  {
    path: 'events',
    component: EventComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'admin',
    component: AdminComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'success',
    component: SuccessComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'success-event',
    component: SuccessEventComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'aboutus/signup',
    component: SignupComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'aboutus/login',
    component: LoginComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'events/aboutus',
    component: AboutUsComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'events/signup',
    component: SignupComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'events/login',
    component: LoginComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'delete',
    component: DeleteComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'deletevent',
    component: DeleteEventComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'dests1',
    component: DestinationListComponent,
    data: { title: 'Admin' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'signup/aboutus',
    component: AboutUsComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'static-page/aboutus',
    component: AboutUsComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'login/aboutus',
    component: AboutUsComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'login/signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'static-page/signup',
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'signup/login',
    component: LoginComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'static-page/login',
    component: LoginComponent,
    data: { title: 'Sign Up' }
  },


  {
    path: 'userpage',
    component: TripWithUsComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'adminpage',
    component: AdminComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'book-details/:id',
    component: EventsDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'event-create',
    component: EventsCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: EventsEditComponent,
    data: { title: 'Edit Book' }
  },
  { path: 'static-page', component: MainPageComponent },
      { path: 'when-where', component: WhenWhereComponent },
  { path: '',
  component: SampleComponent,
    pathMatch: 'full'
  },
  { path: 'eventList',
  component: UserEventComponent,
  data: { title: 'Destination List Details' }
  },
  { path: 'eventList/aboutus',
  component: AboutUsComponent,
  data: { title: 'Destination List Details' }
  },
  { path: 'aboutus/login',
  component: LoginComponent,
  data: { title: 'Destination List Details' }
  },
  { path: 'eventList/signup',
  component: SignupComponent,
  data: { title: 'Destination List Details' }
  },
  { path: 'eventList/login',
  component: LoginComponent,
  data: { title: 'Destination List Details' }
  },
  { path: 'destinations',
  component: UserDestComponent,
  data: { title: 'Destination List Details' }
  },
  {
    path: 'navbar',
    component: NavigatorComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    LoginComponent,
    SignupComponent,
    BookDetailComponent,
    BookCreateComponent,
    BookEditComponent,
    FrontPageComponent,
    MainPageComponent,
    WhenWhereComponent,
    AdminComponent,
    TripWithUsComponent,
    AboutUsComponent,
    UserProfile,
    SampleComponent,
    WebFormComponent,

    DestinationListComponent,
    EventComponent,
    EventsCreateComponent,
    EventsDetailComponent,
    EventsEditComponent,
    SuccessComponent,
    DestinationListComponent,
    UserEventComponent,
    UserDestComponent,
    DeleteComponent,
    NavigatorComponent,
    SuccessEventComponent,
    DeleteEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,

      { enableTracing: true , onSameUrlNavigation: 'reload'}
    )
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
