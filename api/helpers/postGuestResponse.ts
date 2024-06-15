type ResponseData = {
  full_name: string;
  response: string;
}[];

const postGuestResponse = async (responses: ResponseData) => {
  try {
    const res = await fetch("/api/guests", {
      method: "POST",
      body: JSON.stringify(responses),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();
    const { rows } = data.result;

    return rows;
  } catch (error) {
    console.error("Error updating response", error);
  }
};

export default postGuestResponse;
