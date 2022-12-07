import { it, expect , describe, vi} from 'vitest';
import { storeData , generateReportData } from '../src/data.js';

//using spies to check if function was called
describe( 'generateReportData()' , () => {
    it('should execute logFn if provided', () => {
        //spy function vi(or jest from jest/globals), checks if function was called
        const logger = vi.fn();

        //if we want to mock implementation of function: 
        // logger.mockImplementation(() => {})
        // logger.mockImplementationOnce(() => {})

        generateReportData(logger);
        expect(logger).toHaveBeenCalled();
    });
});


// describe( 'storeData()' , () => {

// });
