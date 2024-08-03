import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { VoteProfileComponent } from './vote-profile/vote-profile.component';
import {SignInComponent} from './sign-in/sign-in.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { VoteSummaryComponent } from './vote-summary/vote-summary.component';

export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'App/makeVote', component: VoteProfileComponent },
  { path: '', component: SignInComponent },
  { path: 'App/CreateProfile', component: CreateProfileComponent },
  { path: 'App/voteSummary', component: VoteSummaryComponent },
];
