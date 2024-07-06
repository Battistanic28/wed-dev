const getGuestsByFullName = async (fullName: string) => {
  try {
    const res = await fetch(
      '/api/guests?' + new URLSearchParams({ full_name: fullName }),
      {
        method: 'GET',
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const { rows } = data.result;

    return rows;
  } catch (error) {
    console.error('Error fetching guests:', error);
    return [];
  }
};

export default getGuestsByFullName;
