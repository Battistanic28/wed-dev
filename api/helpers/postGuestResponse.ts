export type ResponseData = {
  full_name: string;
  response: string;
}[];

const postGuestResponse = async (responses: ResponseData) => {
  try {
    const res = await fetch("/api/guests", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responses),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error updating response:", error);
    return null;
  }
};

export default postGuestResponse;
