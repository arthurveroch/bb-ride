import * as migration_20260516_134327 from './20260516_134327';
import * as migration_20260527_200256 from './20260527_200256';
import * as migration_20260601_133316 from './20260601_133316';

export const migrations = [
  {
    up: migration_20260516_134327.up,
    down: migration_20260516_134327.down,
    name: '20260516_134327',
  },
  {
    up: migration_20260527_200256.up,
    down: migration_20260527_200256.down,
    name: '20260527_200256',
  },
  {
    up: migration_20260601_133316.up,
    down: migration_20260601_133316.down,
    name: '20260601_133316'
  },
];
