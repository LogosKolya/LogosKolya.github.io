import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminBlogComponent } from './Pages/admin-blog/admin-blog.component';
import { BlogComponent } from './Pages/blog/blog.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'admin/blogs', component: AdminBlogComponent },
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'admin', pathMatch: 'full', redirectTo: 'admin/blogs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
