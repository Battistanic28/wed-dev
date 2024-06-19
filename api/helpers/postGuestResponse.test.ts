import fetchMock from 'fetch-mock';
import postGuestResponse, { ResponseData } from './postGuestResponse';

describe('postGuestResponse', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return data when the request is successful', async () => {
    const mockResponseData = { success: true };
    fetchMock.post('/api/guests', {
      status: 200,
      body: mockResponseData,
    });

    const responses: ResponseData = [
      { full_name: 'John Doe', response: 'Yes' },
      { full_name: 'Jane Doe', response: 'No' },
    ];

    const data = await postGuestResponse(responses);

    expect(data).toEqual(mockResponseData);
  });

  it('should throw an error when the request fails with a non-200 status', async () => {
    fetchMock.post('/api/guests', 500);

    const responses: ResponseData = [
      { full_name: 'John Doe', response: 'Yes' },
      { full_name: 'Jane Doe', response: 'No' },
    ];

    const data = await postGuestResponse(responses);

    expect(data).toBeNull();
  });

  it('should return null and log an error when fetch throws an exception', async () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    fetchMock.post('/api/guests', { throws: new Error('Network error') });

    const responses: ResponseData = [
      { full_name: 'John Doe', response: 'Yes' },
      { full_name: 'Jane Doe', response: 'No' },
    ];

    const data = await postGuestResponse(responses);

    expect(data).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith("Error updating response:", expect.any(Error));

    consoleSpy.mockRestore();
  });
});
