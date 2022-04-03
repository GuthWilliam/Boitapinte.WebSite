import { TestBed } from '@angular/core/testing';

import { TeamMemberComponent } from './team-member.component';

describe('TeamMemberComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamMemberComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const teamMemberComponent: TeamMemberComponent = new TeamMemberComponent();
    expect(teamMemberComponent).toBeTruthy();
  });

  it('should have method to get the image URL', () => {
    // given a pony component with a PURPLE pony
    const teamMemberComponent: TeamMemberComponent = new TeamMemberComponent();
    teamMemberComponent.teamMemberModel = { name: 'Fast', description : 'hehe', job: 'job', mail: 'mail@mail.com' };

    // when we call the method for the URL
    const url = teamMemberComponent.getImageUrl();

    // then we should have a nice URL
    expect(url).withContext('The URL built with `getPonyImageUrl` is not correct').toBe('assets/images/fast.png');
  });
});
