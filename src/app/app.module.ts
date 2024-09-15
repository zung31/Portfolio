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
import { InscriptionPageEtrangerComponent } from './components/pages/inscription-page-etranger/inscription-page-etranger.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactMapComponent } from './components/common/contact-map/contact-map.component';
import { Router, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturedBoxes2Component } from './components/common/featured-boxes-2/featured-boxes-2.component';
import { FeaturedBoxes3Component } from './components/common/featured-boxes-3/featured-boxes-3.component';
import { Licence1PageComponent } from './components/pages/licence-1-page/licence-1-page.component';
import { LyceePageComponent } from './components/pages/lycee-page/lycee-page.component';
import { CompetencesPageComponent } from './components/pages/competences-page/competences-page.component';
import { LangueComponent } from './components/common/langues/langues.component';
import { InformatiqueComponent } from './components/common/informatique/informatique.component';
import { JavaPageComponent } from './components/pages/java-page/java-page.component';
import { JavaProjet2Component } from './components/pages/java-projet2/java-projet2.component';
import { JavaProjet3Component } from './components/pages/java-projet3/java-projet3.component';
import { JavaProjet4Component } from './components/pages/java-projet4/java-projet4.component';
import { JavaProjet5Component } from './components/pages/java-projet5/java-projet5.component';
import { PythonPageComponent } from './components/pages/python-page/python-page.component';
import { PythonProjet1Component } from './components/pages/python-projet1/python-projet1.component';
import { PythonProjet2Component } from './components/pages/python-projet2/python-projet2.component';
import { PythonProjet3Component } from './components/pages/python-projet3/python-projet3.component';
import { Informatique2Component } from './components/common/informatique-2/informatique-2.component';
import { LangWebComponent } from './components/pages/lang-web-page/lang-web.component';
import { CPageComponent } from './components/pages/c-page/c-page.component';
import { CProjet1Component } from './components/pages/c-projet1/c-projet1.component';
import { CProjet2Component } from './components/pages/c-projet2/c-projet2.component';
import { CProjet3Component } from './components/pages/c-projet3/c-projet.component';
import { LindoComponent } from './components/pages/lindo/lindo.component';
import { SqlPageComponent } from './components/pages/sql-page/sql-page.component';
import { SqlProjet1Component } from './components/pages/sql-projet1/sql-projet1.component';
import { SqlProjet2Component } from './components/pages/sql-projet2/sql-projet2.component';
import { MatlabComponent } from './components/pages/matlab-page/matlab.component';
import { MatlabProjet1Component } from './components/pages/matlab-projet1/matlab-projet1.component';
import { MatlabProjet2Component } from './components/pages/matlab-projet2/matlab-projet2.component';
import { EtudesComponent } from './components/pages/etudes-page/etudes.component';
import { MetiersComponent } from './components/pages/metiers-page/metiers.component';

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
        Licence1PageComponent,
        Licence2PageComponent,
        LyceePageComponent,
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
        ContactMapComponent,
        FeaturedBoxesComponent,
        FeaturedBoxes2Component,
        FeaturedBoxes3Component,
        CompetencesPageComponent,
        LangueComponent,
        InformatiqueComponent,
        JavaPageComponent,
        JavaProjet2Component,
        JavaProjet3Component,
        JavaProjet4Component,
        JavaProjet5Component,
        PythonPageComponent,
        PythonProjet1Component,
        PythonProjet2Component,
        PythonProjet3Component,
        Informatique2Component,
        LangWebComponent,
        CPageComponent,
        CProjet1Component,
        CProjet2Component,
        CProjet3Component,
        LindoComponent,
        SqlPageComponent,
        SqlProjet1Component,
        SqlProjet2Component,
        MatlabComponent,
        MatlabProjet1Component,
        MatlabProjet2Component,
        EtudesComponent,
        MetiersComponent
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
        FontAwesomeModule,
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }