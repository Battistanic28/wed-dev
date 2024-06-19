const getGuestsByLastName = async (lastName: string) => {
  try {
    const res = await fetch(
      "/api/guests?" + new URLSearchParams({ last_name: lastName }),
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    const { rows } = data.result;

    return rows;
  } catch (error) {
    console.error("Error fetching guests:", error);
    return []; 
  }
};

export default getGuestsByLastName;
