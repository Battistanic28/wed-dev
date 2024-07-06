import fetchMock from 'fetch-mock';
import getGuestsByFullName from './getGuestsByFullName';

describe('getGuestsByFullName', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should return guest rows when the request is successful', async () => {
    const mockRows = [
      {
        full_name: 'Jane Doe',
        group_id: 1,
        response: 'yes',
      },
      {
        full_name: 'John Doe',
        group_id: 1,
        response: 'Yes',
      },
    ];
    const mockResponseData = {
      result: {
        rows: mockRows,
      },
    };

    const fullName = 'John Doe';
    const encodedFullName = encodeURIComponent(fullName);

    fetchMock.get(`/api/guests?full_name=${encodedFullName}`, {
      status: 200,
      body: mockResponseData,
    });

    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual(mockRows);
  });

  it('should return an empty array when the request fails with a non-200 status', async () => {
    const fullName = 'Joe Null';
    const encodedFullName = encodeURIComponent(fullName);

    fetchMock.get(`/api/guests?full_name=${encodedFullName}`, {
      status: 500,
    });

    const rows = await getGuestsByFullName(fullName);

    expect(rows).toEqual([]);
  });
});
