import getGuestsByFullName from './getGuestsByFullName';

global.fetch = jest.fn();

describe('getGuestsByFullName', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return guests when the API call is successful', async () => {
    const mockResponse = {
      result: {
        rows: [{ id: 1, full_name: 'John Doe' }],
      },
    };
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const fullName = 'John Doe';
    const guests = await getGuestsByFullName(fullName);

    expect(fetch).toHaveBeenCalledWith(
      '/api/guests?' + new URLSearchParams({ full_name: fullName }),
      {
        method: 'GET',
      },
    );
    expect(guests).toEqual(mockResponse.result.rows);
  });

  it('should throw an error when the API call is not successful', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    const fullName = 'John Doe';
    const guests = await getGuestsByFullName(fullName);

    expect(fetch).toHaveBeenCalledWith(
      '/api/guests?' + new URLSearchParams({ full_name: fullName }),
      {
        method: 'GET',
      },
    );
    expect(guests).toEqual([]);
  });

  it('should return an empty array when an exception occurs', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const fullName = 'John Doe';
    const guests = await getGuestsByFullName(fullName);

    expect(fetch).toHaveBeenCalledWith(
      '/api/guests?' + new URLSearchParams({ full_name: fullName }),
      {
        method: 'GET',
      },
    );
    expect(guests).toEqual([]);
  });
});
