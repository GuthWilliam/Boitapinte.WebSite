import { TestBed } from '@angular/core/testing';

import { TeamService } from './team.service';

describe('TeamsService', () => {
  let service: TeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get full team', () => {
    expect(service).toBeTruthy();
    expect(service.getTeam()).toBeTruthy();
    expect(service.getTeam().length).toBe(4);
  });

  it('should get team in alphabetics order', () => {
    expect(service.getTeam()[0].name).toBe('Alexandre');
    expect(service.getTeam()[1].name).toBe('Damien');
    expect(service.getTeam()[2].name).toBe('Nicolas');
    expect(service.getTeam()[3].name).toBe('William');
  });
});
