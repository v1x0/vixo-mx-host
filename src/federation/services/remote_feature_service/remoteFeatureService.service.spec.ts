import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { REMOTE_MODULE_LOADER } from '../../loader';
import { RemoteFeatureService } from './remoteFeatureService.service';

@Component({ template: 'login' })
class FakeLoginComponent {}

describe('RemoteFeatureService', () => {
  const loader = vi.fn();
  let service: RemoteFeatureService;

  beforeEach(() => {
    loader.mockReset();
    TestBed.configureTestingModule({
      providers: [{ provide: REMOTE_MODULE_LOADER, useValue: loader }],
    });
    service = TestBed.inject(RemoteFeatureService);
  });

  it('should return the exported component of the remote', async () => {
    loader.mockResolvedValue({ LoginComponent: FakeLoginComponent });

    expect(await service.load('mfe-login', './Login', 'LoginComponent')).toBe(FakeLoginComponent);
    expect(loader).toHaveBeenCalledWith('mfe-login', './Login');
  });

  it('should fail when the remote does not export the component', async () => {
    loader.mockResolvedValue({});

    await expect(service.load('mfe-login', './Login', 'LoginComponent')).rejects.toThrow(
      'mfe-login/Login does not export LoginComponent',
    );
  });
});
