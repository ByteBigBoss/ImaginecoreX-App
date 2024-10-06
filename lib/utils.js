export const getEnv = () => {
    const IMCROX_API_URL = process.env.EXPO_PUBLIC_API_URL;
  
    if (!IMCROX_API_URL) {
      throw new Error("EXPO_PUBLIC_API_URL is not defined in the environment variables");
    }
  
    return {
        IMCROX_API_URL,
    };
  };
  