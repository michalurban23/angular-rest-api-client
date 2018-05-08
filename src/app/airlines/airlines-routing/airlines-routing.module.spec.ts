import { AirlinesRoutingModule } from './airlines-routing.module';

describe('AirlinesRoutingModule', () => {
  let airlinesRoutingModule: AirlinesRoutingModule;

  beforeEach(() => {
    airlinesRoutingModule = new AirlinesRoutingModule();
  });

  it('should create an instance', () => {
    expect(airlinesRoutingModule).toBeTruthy();
  });
});
