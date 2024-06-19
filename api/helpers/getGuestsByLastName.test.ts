import fetchMock from 'fetch-mock';
import getGuestsByLastName from './getGuestsByLastName';

describe('getGuestsByLastName', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return guest rows when the request is successful', async () => {
    const mockRows = [
      { full_name: 'John Doe', last_name: 'Doe' },
      { full_name: 'Jane Doe', last_name: 'Doe' },
    ];
    const mockResponseData = {
      result: {
        rows: mockRows
      }
    };
    fetchMock.get('/api/guests?last_name=Doe', {
      status: 200,
      body: mockResponseData,
    });

    const lastName = 'Doe';
    const rows = await getGuestsByLastName(lastName);

    expect(rows).toEqual(mockRows);
  });

  it('should return null when the request fails with a non-200 status', async () => {
    fetchMock.get('/api/guests?last_name=Doe', 500);

    const lastName = 'Doe';

    const rows = await getGuestsByLastName(lastName);

    expect(rows).toEqual([])
  });
});
