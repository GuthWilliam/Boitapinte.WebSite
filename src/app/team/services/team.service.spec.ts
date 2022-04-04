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
    const team = service.getTeam();
    expect(team).toBeTruthy();
    expect(team.length).toBe(4);
  });

  it('should get team in alphabetics order', () => {
    const team = service.getTeam();
    expect(team[0].name).toBe('Alexandre');
    expect(team[1].name).toBe('Damien');
    expect(team[2].name).toBe('Nicolas');
    expect(team[3].name).toBe('William');
  });
});
