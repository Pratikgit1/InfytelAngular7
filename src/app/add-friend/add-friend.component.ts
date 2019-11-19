import { AddFriendService } from './add-friend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent implements OnInit {

  submit: boolean;
  addFriendForm: FormGroup;
  errMsg: string;
  successMsg: string;
  constructor(private formBuilder: FormBuilder, private addFriendService: AddFriendService) { }

  addFriend() {
    this.submit = true;
    this.addFriendService.addFriend(this.addFriendForm.value).subscribe(
      data => {
        this.successMsg = 'Added Successfully';
        this.errMsg = null;
      },
      error => {
        this.errMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.addFriendForm = this.formBuilder.group({
      friendAndFamily: ['', [Validators.required, Validators.pattern('[7-9][0-9]{9}')]]
    });
  }

}
