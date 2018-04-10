export const TEST = 'TEST';

export const TEST_ACTION_REQUESTED = 'TEST_ACTION_REQUESTED';
export const testActionRequested = (testString) => ({
    type: TEST_ACTION_REQUESTED,
    payload: testString,
});

export const testAction = (testString) => ({
    type: TEST,
    payload: testString,
});