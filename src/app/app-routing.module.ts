import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { Licence2PageComponent } from './components/pages/licence-2-page/licence-2-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { InstructorsPageComponent } from './components/pages/instructors-page/instructors-page.component';
import { InstructorProfilePageComponent } from './components/pages/instructor-profile-page/instructor-profile-page.component';
import { SuccessStoriesPageComponent } from './components/pages/success-stories-page/success-stories-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventDetailsPageComponent } from './components/pages/event-details-page/event-details-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CourseDetailsPageComponent } from './components/pages/course-details-page/course-details-page.component';
import { CoursesGridPageComponent } from './components/pages/courses-grid-page/courses-grid-page.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrolledCoursesComponent } from './components/dashboard/enrolled-courses/enrolled-courses.component';
import { WishlistComponent } from './components/dashboard/wishlist/wishlist.component';
import { MyProfileComponent } from './components/dashboard/my-profile/my-profile.component';
import { ActiveCoursesComponent } from './components/dashboard/active-courses/active-courses.component';
import { OrdersListComponent } from './components/dashboard/orders-list/orders-list.component';
import { ReviewsComponent } from './components/dashboard/reviews/reviews.component';
import { CompletedCoursesComponent } from './components/dashboard/completed-courses/completed-courses.component';
import { CartComponent } from './components/dashboard/cart/cart.component';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';
import { AccessbilitePageComponent } from './components/pages/accessbilite-page/accessbilite-page.component';
import { CgvPageComponent } from './components/pages/cgv-page/cgv-page.component';
import { InscriptionPageComponent } from './components/pages/inscription-page/inscription-page.component';
import { InscriptionPageVisComponent } from './components/pages/inscription-page-vis/inscription-page-vis.component';
import { InscriptionPageEtrangerComponent } from './components/pages/inscription-page-etranger/inscription-page-etranger.component';
import { NosSitesInterventionPageComponent } from './components/pages/nos-sites-intervention/nos-sites-intervention.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Licence1PageComponent } from './components/pages/licence-1-page/licence-1-page.component';
import { LyceePageComponent } from './components/pages/lycee-page/lycee-page.component';

const routes: Routes = [
    {path: '', component: HomeDemoThreeComponent},
    // {path: 'index-2', component: HomeDemoTwoComponent},
    // {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'info', component: AboutPageComponent},
    // {path: 'instructors', component: InstructorsPageComponent},
    // {path: 'instructor-profile', component: InstructorProfilePageComponent},
    // {path: 'success-stories', component: SuccessStoriesPageComponent},
    // {path: 'pricing', component: PricingPageComponent},
    // {path: 'faq', component: FaqPageComponent},
    // {path: 'courses-grid', component: CoursesGridPageComponent},
    // {path: 'courses-list', component: CoursesListPageComponent},
    // {path: 'course-details', component: CourseDetailsPageComponent},
    {path: 'events', component: EventsPageComponent},
    // {path: 'event-details', component: EventDetailsPageComponent},
    // {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'licence-1', component: Licence1PageComponent},
    {path: 'licence-2', component: Licence2PageComponent},
    {path: 'lycee', component: LyceePageComponent},
    {path: 'mentions-legales', component: TermsConditionsPageComponent},
    // {path: 'profile-authentication', component: ProfileAuthenticationPageComponent},
    // {path: 'forgot-password', component: ForgotPasswordPageComponent},
    // {path: 'blog-grid', component: BlogGridPageComponent},
    // {path: 'blog-right-sidebar', component: BlogRightSidebarPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    // {path: 'contact', component: ContactPageComponent},
    {path: 'accessbilite', component: AccessbilitePageComponent},
    {path: 'nos-sites-intervention', component: NosSitesInterventionPageComponent},
    {path: 'cgv', component: CgvPageComponent},
    {path: 'inscription', component: InscriptionPageComponent},
    {path: 'inscription-vis', component: InscriptionPageVisComponent},
    {path: 'inscription-etranger', component: InscriptionPageEtrangerComponent},


    // {
    //     path: 'dashboard',
    //     component: DashboardComponent,
    //     children: [
    //         { path: 'enrolled-courses', component: EnrolledCoursesComponent },
    //         { path: 'wishlist', component: WishlistComponent },
    //         { path: 'my-profile', component: MyProfileComponent },
    //         { path: 'edit-profile', component: EditProfileComponent },
    //         { path: 'active-courses', component: ActiveCoursesComponent },
    //         { path: 'orders-list', component: OrdersListComponent },
    //         { path: 'reviews', component: ReviewsComponent },
    //         { path: 'completed-courses', component: CompletedCoursesComponent },
    //         { path: 'cart', component: CartComponent }
    //     ]
    // },
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }