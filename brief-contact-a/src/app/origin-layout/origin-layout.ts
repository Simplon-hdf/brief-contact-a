import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Card } from '../card/card';
import { Router, RouterOutlet } from '@angular/router';
import { ProfilePage } from '../profile-page/profile-page';
import { AddForm } from '../add-form/add-form';

@Component  ({
  selector: 'app-origin-layout',
  imports: [Header, RouterOutlet, Card, ProfilePage, AddForm],
  templateUrl: './origin-layout.html',
  styleUrl: './origin-layout.css',
})
export class OriginLayout {}
