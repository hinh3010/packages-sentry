import * as Sentry from '@sentry/node';
import type { CaptureContext, EventHint } from '@sentry/types';
/**
 * Interface for the SimpleSentry class.
 */
export interface ISimpleSentry {
    /**
     * Logs an event to Sentry.
     * @param event The event to log.
     */
    captureEvent: (event: Sentry.Event, hint?: EventHint) => void;
    /**
     * Logs a message to Sentry.
     * @param message The message to log.
     */
    captureMessage: (message: string, level?: Sentry.SeverityLevel) => void;
    /**
     * Logs an exception to Sentry.
     * @param error The error to log.
     */
    captureException: (error: Error, context?: CaptureContext) => void;
}
/**
 * SimpleSentry is a class that provides a simple interface to log events,
 * messages and exceptions to Sentry.
 */
export declare class SimpleSentry implements ISimpleSentry {
    /**
     * Creates a new instance of the SimpleSentry class.
     * @param dsn The DSN of the Sentry project.
     * @param enabled Whether Sentry should be enabled or not.
     */
    constructor(options: Sentry.NodeOptions);
    /**
     * Logs an event to Sentry.
     * @param event The event to log.
     */
    captureEvent(event: Sentry.Event, hint?: EventHint): void;
    /**
     * Logs a message to Sentry.
     * @param message The message to log.
     */
    captureMessage(message: string, level?: Sentry.SeverityLevel): void;
    /**
     * Logs an exception to Sentry.
     * @param error The error to log.
     */
    captureException(error: Error, context?: CaptureContext): void;
}
