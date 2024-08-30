import { NgModule } from '@angular/core';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { InstructorsComponent } from './components/common/instructors/instructors.component';
import { AboutComponent } from './components/common/about/about.component';
import { FeaturedComponent } from './components/common/featured/featured.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { FeaturedCoursesComponent } from './components/common/featured-courses/featured-courses.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { TopRatedCoursesComponent } from './components/common/top-rated-courses/top-rated-courses.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { FeaturedBoxesComponent } from './components/common/featured-boxes/featured-boxes.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { OverviewComponent } from './components/common/overview/overview.component';
import { VideoComponent } from './components/common/video/video.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
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
import { BlogWidgetComponent } from './components/common/blog-widget/blog-widget.component';
import { CoursesGridPageComponent } from './components/pages/courses-grid-page/courses-grid-page.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { CourseDetailsPageComponent } from './components/pages/course-details-page/course-details-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrolledCoursesComponent } from './components/dashboard/enrolled-courses/enrolled-courses.component';
import { WishlistComponent } from './components/dashboard/wishlist/wishlist.component';
import { MyProfileComponent } from './components/dashboard/my-profile/my-profile.component';
import { ActiveCoursesComponent } from './components/dashboard/active-courses/active-courses.component';
import { ReviewsComponent } from './components/dashboard/reviews/reviews.component';
import { CompletedCoursesComponent } from './components/dashboard/completed-courses/completed-courses.component';
import { CartComponent } from './components/dashboard/cart/cart.component';
import { OrdersListComponent } from './components/dashboard/orders-list/orders-list.component';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';
import { InscriptionPageEtrangerComponent } from './components/pages/inscription-page-etranger/inscription-page-etranger.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactMapComponent } from './components/common/contact-map/contact-map.component';
import { Router, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturedBoxes2Component } from './components/common/featured-boxes-2/featured-boxes-2.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        NavbarComponent,
        FooterComponent,
        NotFoundComponent,
        BlogComponent,
        PartnerComponent,
        FeaturesComponent,
        SubscribeComponent,
        FeedbackComponent,
        InstructorsComponent,
        AboutComponent,
        FeaturedComponent,
        CategoriesComponent,
        CoursesComponent,
        FeaturedCoursesComponent,
        HomeoneBannerComponent,
        TopRatedCoursesComponent,
        FunfactsComponent,
        FeaturedBoxesComponent,
        HometwoBannerComponent,
        TopHeaderComponent,
        OverviewComponent,
        VideoComponent,
        HomethreeBannerComponent,
        ContactPageComponent,
        AboutPageComponent,
        FaqPageComponent,
        Licence2PageComponent,
        TermsConditionsPageComponent,
        ProfileAuthenticationPageComponent,
        TestimonialsPageComponent,
        ForgotPasswordPageComponent,
        InstructorsPageComponent,
        InstructorProfilePageComponent,
        SuccessStoriesPageComponent,
        PricingPageComponent,
        EventsPageComponent,
        EventDetailsPageComponent,
        BlogGridPageComponent,
        BlogRightSidebarPageComponent,
        BlogDetailsPageComponent,
        BlogWidgetComponent,
        CoursesGridPageComponent,
        CoursesListPageComponent,
        CourseDetailsPageComponent,
        DashboardComponent,
        EnrolledCoursesComponent,
        WishlistComponent,
        MyProfileComponent,
        ActiveCoursesComponent,
        ReviewsComponent,
        CompletedCoursesComponent,
        CartComponent,
        OrdersListComponent,
        EditProfileComponent,    
        ContactMapComponent,
        FeaturedBoxes2Component
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        HttpClientModule,
        NgxScrollTopModule,
        InscriptionPageEtrangerComponent,
        CarouselModule,
        FontAwesomeModule
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }