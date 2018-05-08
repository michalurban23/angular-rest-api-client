import { AirportsRoutingModule } from './airports-routing.module';

describe('AirportsRoutingModule', () => {
  let airportsRoutingModule: AirportsRoutingModule;

  beforeEach(() => {
    airportsRoutingModule = new AirportsRoutingModule();
  });

  it('should create an instance', () => {
    expect(airportsRoutingModule).toBeTruthy();
  });
});
