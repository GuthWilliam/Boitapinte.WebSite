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
});
