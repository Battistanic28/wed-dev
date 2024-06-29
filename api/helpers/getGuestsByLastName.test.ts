import fetchMock from 'fetch-mock';
import getGuestsByFullName from './getGuestsByFullName';

describe('getGuestsByLastName', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return guest rows when the request is successful', async () => {
    const mockRows = [
      { full_name: 'John Doe', group_id: 1, response: 'Yes' },
      { full_name: 'Jane Doe', group_id: 1, response: 'No' },
    ];
    const mockResponseData = {
      result: {
        rows: mockRows,
      },
    };
    fetchMock.get('/api/guests?full_name=John+Doe', {
      status: 200,
      body: mockResponseData,
    });

    const fullName = 'John Doe';
    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual(mockRows);
  });

  it('should return null when the request fails with a non-200 status', async () => {
    fetchMock.get('/api/guests?full_name=Doe', 500);

    const fullName = 'Doe';

    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual([]);
  });
});
