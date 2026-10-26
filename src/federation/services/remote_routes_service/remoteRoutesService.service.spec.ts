import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { MfeRegistryEntry } from '../../registry';
import { REMOTE_MODULE_LOADER } from '../../loader';
import { RemoteRoutesService } from './remoteRoutesService.service';

const ENTRY: MfeRegistryEntry = {
  remoteName: 'customers-mfe',
  exposedModule: './Routes',
  path: 'customers',
  title: 'Clientes',
  icon: 'groups',
  roles: [],
};

describe('RemoteRoutesService', () => {
  const loader = vi.fn();
  let service: RemoteRoutesService;

  beforeEach(() => {
    loader.mockReset();
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    TestBed.configureTestingModule({
      providers: [{ provide: REMOTE_MODULE_LOADER, useValue: loader }],
    });
    service = TestBed.inject(RemoteRoutesService);
  });

  it('should return the routes exported by the remote', async () => {
    const remoteRoutes: Routes = [{ path: '' }, { path: ':id' }];
    loader.mockResolvedValue({ routes: remoteRoutes });

    const routes = await service.loadRoutes(ENTRY);

    expect(loader).toHaveBeenCalledWith('customers-mfe', './Routes');
    expect(routes).toBe(remoteRoutes);
  });

  it('should fall back to the unavailable page when the remote fails', async () => {
    loader.mockRejectedValue(new Error('Failed to fetch'));

    const routes = await service.loadRoutes(ENTRY);

    expect(routes).toHaveLength(1);
    expect(routes[0].path).toBe('**');
    expect(routes[0].data).toEqual({ mfeTitle: 'Clientes' });
  });

  it('should fall back when the remote does not export routes', async () => {
    loader.mockResolvedValue({});

    const routes = await service.loadRoutes(ENTRY);

    expect(routes[0].path).toBe('**');
  });
});
