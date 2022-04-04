import { TestBed } from '@angular/core/testing';

import { TeamMemberComponent } from './team-member.component';

describe('TeamMemberComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberComponent]
    })
      .compileComponents();
  });

  it('should create', () => {
    const teamMemberComponent: TeamMemberComponent = new TeamMemberComponent();
    expect(teamMemberComponent).toBeTruthy();
  });

  it('should display the name in h3, the job and desciption in p', () => {
    const fixture = TestBed.createComponent(TeamMemberComponent);

    // given a team member component with william
    const teamMemberComponent: TeamMemberComponent = fixture.componentInstance;
    teamMemberComponent.teamMemberModel = { name: 'wIlLiAm', description: 'foo', job: 'job', mail: '' };

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have an title with the name
    const element = fixture.nativeElement;
    const titre = element.querySelector('h3');
    expect(titre.textContent).withContext('You should have an name for the team member').not.toBeNull();
    expect(titre.textContent).withContext('You should display the name').toBe('wIlLiAm');
    // and a job 
    const job = fixture.debugElement.nativeElement.querySelector('#job');
    expect(job).withContext('You should have a job for the team member').not.toBeNull();
    expect(job.textContent).withContext('You should display the job').toBe('job');
    // and a description
    const description = fixture.debugElement.nativeElement.querySelector('#description');
    expect(description.textContent).withContext('You should have a description for the team member').not.toBeNull();
    expect(description.textContent).withContext('You should display the foo').toBe('foo');
  });

  it('should have a link to send mail', () => {
    const fixture = TestBed.createComponent(TeamMemberComponent);

    // given a pony component with a PURPLE pony
    const teamMemberComponent: TeamMemberComponent = fixture.componentInstance;
    teamMemberComponent.teamMemberModel = { name: 'wIlLiAm', description: 'foo', job: 'job', mail: 'mail@mail.com' };

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have an image and a legend
    const element = fixture.nativeElement;
    const link = element.querySelector('a');
    expect(link).withContext('You should have a link to send an email').not.toBeNull();
    expect(link.getAttribute('href')).withContext('You should have a link with mailto').toContain('mailto:mail@mail.com?Subject=Contact&body=Bonjour,');
  });

  it('should have method to get the image URL', () => {
    // given a team member component with a william member
    const teamMemberComponent: TeamMemberComponent = new TeamMemberComponent();
    teamMemberComponent.teamMemberModel = { name: 'william', description: 'hehe', job: 'job', mail: 'mail@mail.com' };

    // when we call the method for the URL
    const url = teamMemberComponent.getImageUrl();

    // then we should have a nice URL
    expect(url).withContext('The URL built with `getPonyImageUrl` is not correct').toBe('assets/images/william.png');
  });


  it('should have method to get the mailto URL and content', () => {
    // given a pony component with a PURPLE pony
    const teamMemberComponent: TeamMemberComponent = new TeamMemberComponent();
    teamMemberComponent.teamMemberModel = { name: 'Fast', description: 'foo', job: 'job', mail: 'mail@mail.com' };

    // when we call the method for the URL
    const mailContent = teamMemberComponent.getMailContent();

    // then we should have a nice URL
    expect(mailContent).withContext('The mail to url built with `getMailContent` is not correct')
      .toContain('mailto:mail@mail.com?Subject=Contact&body=Bonjour,');
  });

  it('should display an image and a legend', () => {
    const fixture = TestBed.createComponent(TeamMemberComponent);

    // given a pony component with a PURPLE pony
    const teamMemberComponent: TeamMemberComponent = fixture.componentInstance;
    teamMemberComponent.teamMemberModel = { name: 'wIlLiAm', description: 'foo', job: 'job', mail: 'mail@mail.com' };

    // when we trigger the change detection
    fixture.detectChanges();

    // then we should have an image and a legend
    const element = fixture.nativeElement;
    const image = element.querySelector('img');
    expect(image).withContext('You should have an image for the team member').not.toBeNull();
    expect(image.getAttribute('src')).withContext('The `src` attribute of the image is not correct').toBe('assets/images/william.png');
    expect(image.getAttribute('alt')).withContext('The `alt` attribute for the image is not correct').toBe('wIlLiAm');
  });

});
