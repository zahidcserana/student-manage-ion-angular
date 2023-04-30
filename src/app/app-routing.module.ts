import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  },
  {
    path: 'grade',
    loadChildren: () => import('./grade/grade.module').then( m => m.GradeModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then( m => m.StudentModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
