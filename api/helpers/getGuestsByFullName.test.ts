import fetchMock from 'fetch-mock';
import getGuestsByFullName from './getGuestsByFullName';

describe('getGuestsByFullName', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it.skip('should return guest rows when the request is successful', async () => {
    const mockRows = [
      {
        full_name: 'JANE DOE',
        group_id: 1,
        response: 'yes',
      },
      {
        full_name: 'JOHN DOE',
        group_id: 1,
        response: 'Yes',
      },
    ];
    const mockResponseData = {
      result: {
        rows: mockRows,
      },
    };

    fetchMock.get('/api/guests?full_name=JOHN%20DOE', {
      status: 200,
      body: mockResponseData,
    });

    const fullName = 'John Doe';
    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual(mockRows);
  });

  it('should return null when the request fails with a non-200 status', async () => {
    fetchMock.get('/api/guests?full_name=Null', 500);

    const fullName = 'Joe Null';

    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual([]);
  });
});
