import { Meteor } from 'meteor/meteor';
import { ActivatedRoute } from '@angular/router'
import {Component, OnInit, Inject} from '@angular/core';
import template from './personal_cabinet.component.html'
import style from './personal_cabinet.component.scss'
import { User } from '../../../../both/models/user.model'
import { UserCollection } from '../../../../both/collections/user.collection'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { InjectUser } from "angular2-meteor-accounts-ui";

@Component({
    selector:'pers-cab',
    template,
    styles: [style]
})

@InjectUser('user')

export class CabinetComponent implements OnInit {
    user: User;
    formAdd: FormGroup;

    constructor(private formBuilder: FormBuilder){}

    ngOnInit() {
        if(Meteor.user()) {
            this.user = UserCollection.findOne(Meteor.userId())
            console.log(Meteor.userId());
        }

        this.formAdd = this.formBuilder.group({
            age: [ '', Validators.required],
            information: [ '', Validators.required],
        })
    }

    changePersonalData() {
        if(this.formAdd.valid) {
            UserCollection.update({_id: Meteor.userId()}, {$set: {
                age: this.formAdd.value.age,
                info: this.formAdd.value.information
            } })
        }
    }
}