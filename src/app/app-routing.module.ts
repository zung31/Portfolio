import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { Licence2PageComponent } from './components/pages/licence-2-page/licence-2-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CompetencesPageComponent } from './components/pages/competences-page/competences-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { Licence1PageComponent } from './components/pages/licence-1-page/licence-1-page.component';
import { LyceePageComponent } from './components/pages/lycee-page/lycee-page.component';
import { JavaPageComponent } from './components/pages/java-page/java-page.component';
import { JavaProjet2Component } from './components/pages/java-projet2/java-projet2.component';
import { JavaProjet3Component } from './components/pages/java-projet3/java-projet3.component';
import { JavaProjet4Component } from './components/pages/java-projet4/java-projet4.component';
import { JavaProjet5Component } from './components/pages/java-projet5/java-projet5.component';
import { PythonPageComponent } from './components/pages/python-page/python-page.component';
import { PythonProjet1Component } from './components/pages/python-projet1/python-projet1.component';
import { PythonProjet2Component } from './components/pages/python-projet2/python-projet2.component';
import { PythonProjet3Component } from './components/pages/python-projet3/python-projet3.component';
import { LangWebComponent } from './components/pages/lang-web-page/lang-web.component';
import { CPageComponent } from './components/pages/c-page/c-page.component';
import { CProjet1Component } from './components/pages/c-projet1/c-projet1.component';
import { CProjet2Component } from './components/pages/c-projet2/c-projet2.component';
import { CProjet3Component } from './components/pages/c-projet3/c-projet3.component';
import { LindoComponent } from './components/pages/lindo/lindo.component';
import { SqlPageComponent } from './components/pages/sql-page/sql-page.component';
import { SqlProjet1Component } from './components/pages/sql-projet1/sql-projet1.component';
import { SqlProjet2Component } from './components/pages/sql-projet2/sql-projet2.component';
import { MatlabComponent } from './components/pages/matlab-page/matlab.component';
import { MatlabProjet1Component } from './components/pages/matlab-projet1/matlab-projet1.component';
import { MatlabProjet2Component } from './components/pages/matlab-projet2/matlab-projet2.component';
import { EtudesComponent } from './components/pages/etudes-page/etudes.component';
import { MetiersComponent } from './components/pages/metiers-page/metiers.component';
import { CProjet4Component } from './components/pages/c-projet4/c-projet4.component';

const routes: Routes = [
    {path: '', component: HomeDemoThreeComponent},
    {path: 'info', component: AboutPageComponent},
    {path: 'licence-1', component: Licence1PageComponent},
    {path: 'licence-2', component: Licence2PageComponent},
    {path: 'lycee', component: LyceePageComponent},
    {path: 'java-projet-1', component: BlogDetailsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'competences', component: CompetencesPageComponent},
    {path: 'java-projets', component: JavaPageComponent},
    {path: 'java-projet-2', component: JavaProjet2Component},
    {path: 'java-projet-3', component: JavaProjet3Component},
    {path: 'java-projet-4', component: JavaProjet4Component},
    {path: 'java-projet-5', component: JavaProjet5Component},
    {path: 'python-projets', component: PythonPageComponent},
    {path: 'python-projet-1', component: PythonProjet1Component},
    {path: 'python-projet-2', component: PythonProjet2Component},
    {path: 'python-projet-3', component: PythonProjet3Component},
    {path: 'lang-web', component: LangWebComponent},
    {path: 'c-projets', component: CPageComponent},
    {path: 'c-projet-1', component: CProjet1Component},
    {path: 'c-projet-2', component: CProjet2Component},
    {path: 'c-projet-3', component: CProjet3Component},
    {path: 'c-projet-4', component: CProjet4Component},
    {path: 'lindo', component: LindoComponent},
    {path: 'sql-projets', component: SqlPageComponent},
    {path: 'sql-projet-1', component: SqlProjet1Component},
    {path: 'sql-projet-2', component: SqlProjet2Component},
    {path: 'matlab-projets', component: MatlabComponent},
    {path: 'mathlab-projet-1', component: MatlabProjet1Component},
    {path: 'matlab-projet-2', component: MatlabProjet2Component},
    {path: 'etudes', component: EtudesComponent},
    {path: 'metiers', component: MetiersComponent},
    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }