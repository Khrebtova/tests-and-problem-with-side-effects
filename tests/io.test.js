import writeData  from '../src/util/io';
import { it, expect, describe, vi } from 'vitest';
import { promises as fs } from 'fs';

// Mocking the fs module 
vi.mock('fs')
vi.mock('path', () => {
    return {
        //because we import default path from 'path' we need to return default
        default: {
            join: (...args) => {
                return args[args.length-1]
            }
        }
    }
})

it('should return a promise that resolves to no value if called correctly', async () => {
    const testData = 'tets';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);
    
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});

it('should execute the writeFile method', async () => {
    const testData = 'tets';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);
      
    expect(fs.writeFile).toBeCalled();    
});

it('should execute the writeFile method with rigth params passed ', async () => {
    const testData = 'tets';
    const testFilename = 'test.txt';

    writeData(testData, testFilename);
    
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);
});