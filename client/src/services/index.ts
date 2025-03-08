import axiosInstance from "@/api/axiosInstance";

export async function registerService(formData) {
  try {
    const response = await axiosInstance.post("/auth/register", {
      ...formData,
      role: "user",
    });
    return response.data; // Return the response data directly for ease of use
  } catch (error) {
    console.error("Registration request failed", error);
    throw new Error(error.response?.data?.message || "An error occurred during registration.");
  }
}
