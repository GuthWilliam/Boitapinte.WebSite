import { Component, OnInit } from '@angular/core';
import { teamMember } from '../../models/teamMember.model';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'bap-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  Team : Array<teamMember> | null = null;

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
    this.Team = this.teamService.getTeam();
  }

}
