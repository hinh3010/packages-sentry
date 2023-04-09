import * as Sentry from '@sentry/node';
export declare class SimpleSentry {
    private readonly dsn;
    constructor(dsn: string);
    logEvent(event: Sentry.Event): void;
    logMessage(message: string, level: Sentry.SeverityLevel): void;
    logException(error: Error): void;
}
