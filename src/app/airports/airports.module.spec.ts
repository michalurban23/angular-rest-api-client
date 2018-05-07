import { AirportsModule } from './airports.module';

describe('AirportsModule', () => {
  let airportsModule: AirportsModule;

  beforeEach(() => {
    airportsModule = new AirportsModule();
  });

  it('should create an instance', () => {
    expect(airportsModule).toBeTruthy();
  });
});
