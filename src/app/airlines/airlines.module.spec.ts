import { AirlinesModule } from './airlines.module';

describe('AirlinesModule', () => {
  let airlinesModule: AirlinesModule;

  beforeEach(() => {
    airlinesModule = new AirlinesModule();
  });

  it('should create an instance', () => {
    expect(airlinesModule).toBeTruthy();
  });
});
