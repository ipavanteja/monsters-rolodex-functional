export const getData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propagate the error so the caller can handle it
  }
};
