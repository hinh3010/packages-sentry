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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sentry = __importStar(require("@sentry/node"));
Sentry.init({
    dsn: 'https://e97212d8e39945b2ac1748128f61aa92@o4504943175925760.ingest.sentry.io/4504943177629696',
    tracesSampleRate: 1.0,
    enabled: true
});
const transaction = Sentry.startTransaction({
    op: 'test',
    name: 'My First Test Transaction'
});
function myPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                const error = new Error('This is a custom error message');
                error.code = 404;
                error.type = 'NotFoundError';
                throw error;
            }
            catch (error) {
                // eslint-disable-next-line prefer-promise-reject-errors
                reject(error);
            }
            finally {
                console.log('transaction::', transaction.finish());
                transaction.finish();
            }
        });
    });
}
myPromise()
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.error(error);
    Sentry.captureException(error, { tags: { adu: 'adu' } });
    // Sentry.captureEvent({
    //   message: 'An error occurred',
    //   tags: {
    //     tag1: 'value1',
    //     tag2: 'value2'
    //   },
    //   extra: {
    //     extra1: 'extra value 1',
    //     extra2: 'extra value 2'
    //   }
    // })
});
// const main = () => {
//   try {
//     Sentry.captureMessage('Hello, world!')
//     throw new Error('adu')
//   } catch (error) {
//     console.log(error)
//     Sentry.captureException(error)
//   }
// }
// main()
