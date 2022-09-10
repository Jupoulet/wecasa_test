import { beforeAll, afterEach, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import 'whatwg-fetch';

// src/setupTests.js
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
