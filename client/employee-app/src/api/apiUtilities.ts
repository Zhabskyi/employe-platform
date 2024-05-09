/**
 * @param {string} endpoint
 * @param {(RequestInit & { authenticationPrefix?: string }) | undefined} requestInit
 * @returns {Promise<any>}
 */
export const callAPI = async (
  endpoint: string,
  requestInit?: RequestInit & { authenticationPrefix?: string }
): Promise<any> => {
  try {
    // Add authorization header if authenticationPrefix is provided
    if (requestInit?.authenticationPrefix) {
      requestInit.headers = {
        ...requestInit.headers,
        Authorization: `${requestInit.authenticationPrefix} ${localStorage.getItem("token")}`
      };
    }

    const response = await fetch(endpoint, requestInit);

    // Check for no-content success
    if (response.status === 204) {
      return true;
    }
    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return data;
  } catch (error) {
    throw new Error(`Network or API error occurred: ${error.message || error}`);
  }
};
