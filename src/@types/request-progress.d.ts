declare module 'request-progress' {
  import { EventEmitter } from 'events';

  interface ProgressState {
    percent: number; // Overall percent (between 0 to 1)
    speed: number; // The download speed in bytes/sec
    size: {
      total: number; // The total payload size in bytes
      transferred: number; // The transferred payload size in bytes
    };
    time: {
      elapsed: number; // The total elapsed seconds since the start (3 decimals)
      remaining: number; // The remaining seconds to finish (3 decimals)
    };
  }

  interface ProgressEmitter extends EventEmitter {
    on(event: 'progress', listener: (state: ProgressState) => void): this;
    on(event: 'error', listener: (error: any) => void): this;
    on(event: 'end', listener: () => void): this;
    pipe(emitter: EventEmitter): this;
  }

  function progress(request: any): ProgressEmitter;
  export = progress;
}
