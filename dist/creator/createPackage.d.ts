import { State } from '../types';
declare const createPackage: (state: State['data']) => Promise<void>;
export default createPackage;
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PWD: string;
        }
    }
}
//# sourceMappingURL=createPackage.d.ts.map