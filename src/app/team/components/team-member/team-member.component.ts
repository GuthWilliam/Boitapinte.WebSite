import { Component, Input } from '@angular/core';
import { teamMember } from '../../models/teamMember.model';

@Component({
  selector: 'bap-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent {
  @Input() teamMemberModel!: teamMember;
  constructor() { }
  
  getImageUrl(): string {
    return `assets/images/${this.teamMemberModel.name.toLowerCase()}.png`;
  }

  getMailContent(): string {
    return `mailto:${this.teamMemberModel.mail.toLowerCase()}?Subject=Contact&body=Bonjour,
    %0D%0A%0D%0AJe souhaite vous contacter pour plus d'informations sur votre projet.`;
  }

}
