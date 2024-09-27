export const getEnv = () => {
    const IMCROX_API_URL = process.env.NEXT_PUBLIC_IMCROX_API_URL;
  
    if (!IMCROX_API_URL) {
      throw new Error("NEXT_PUBLIC_IMCROX_API_URL is not defined in the environment variables");
    }
  
    return {
        IMCROX_API_URL,
    };
  };
  