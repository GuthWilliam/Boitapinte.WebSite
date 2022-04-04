import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { teamMember } from '../../models/teamMember.model';
import { TeamService } from '../../services/team.service';

import { TeamComponent } from './team.component';

describe('TeamComponent', () => {
  let component: TeamComponent;
  let fixture: ComponentFixture<TeamComponent>;
  let Team: Array<teamMember> = [
    { name: 'Patrick', job: 'Chef', mail: 'mail', description: 'description' },
    { name: 'John', job: 'sous chef', mail: '', description: 'description' },
    { name: 'Monique', job: 'manager', mail: 'mail', description: 'description' },
    { name: 'Thibault', job: 'directeur', mail: 'mail', description: 'description' },
    { name: 'Antoine', job: 'ingénieur', mail: '', description: 'description' }
  ];

  const fakeTeamService= {
    getTeam: () => { return Team; }
  } as TeamService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamComponent],
      providers: [{ provide: TeamService, useValue: fakeTeamService }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all the team member', () => {
    const fixture = TestBed.createComponent(TeamComponent);

    // when triggering the change detection
    fixture.detectChanges();
    fixture.componentInstance.ngOnInit();
    // then we should have the name and ponies displayed in the template
    const element = fixture.nativeElement;
    const title = element.querySelector('h2');
    expect(title).withContext('You need an h2 element for the title').not.toBeNull();
    expect(title.textContent).withContext('The h2 element should contain the race name').toContain('L\'Equipe');
    const directives = fixture.debugElement.queryAll(By.css('bap-team-member'));
    expect(directives).withContext('You should use the TeamMemberComponent in your template to display the team member').not.toBeNull();
    expect(directives.length).withContext('You should have five team-member components in your template').toBe(5);
  });
});
