import axios from "axios";

const apiClient = async (url, data) => {
  try {
    const response = await axios.post("http://localhost:8020/api/v1/" + url, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
export default apiClient;
