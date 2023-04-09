"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleSentry = void 0;
const Sentry = __importStar(require("@sentry/node"));
/**
 * SimpleSentry is a class that provides a simple interface to log events,
 * messages and exceptions to Sentry.
 */
class SimpleSentry {
    /**
     * Creates a new instance of the SimpleSentry class.
     * @param dsn The DSN of the Sentry project.
     * @param enabled Whether Sentry should be enabled or not.
     */
    constructor(options) {
        const { dsn, enabled } = options;
        Sentry.init({ dsn, tracesSampleRate: 1.0, enabled });
    }
    /**
     * Logs an event to Sentry.
     * @param event The event to log.
     */
    captureEvent(event, hint) {
        Sentry.captureEvent(event, hint);
    }
    /**
     * Logs a message to Sentry.
     * @param message The message to log.
     */
    captureMessage(message, level) {
        Sentry.captureMessage(message, level);
    }
    /**
     * Logs an exception to Sentry.
     * @param error The error to log.
     */
    captureException(error, context) {
        Sentry.captureException(error, context);
    }
}
exports.SimpleSentry = SimpleSentry;
