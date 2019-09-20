import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const { NODE_ENV } = process.env;

class AppDirs {
  store: string;
  constructor() {
    if (NODE_ENV === 'electron') {
      const electron = require('electron').app;
      this.store = join(electron.getPath('downloads'), electron.getName());
    } else {
      this.store = join(__dirname, '..', 'public');
    }

    this.ensureDirectoryExistence(this.store);
    this.ensureDirectoryExistence(this.getStoreTemp());
  }
  getStoreTemp(userId?: string): string {
    return userId ? join(this.store, `${userId}-temp`) : join(this.store, 'temp');
  }
  ensureDirectoryExistence(path: string): string {
    if (!existsSync(path)) mkdirSync(path);
    return path;
  }
}

export const APP_DIRS = new AppDirs();
