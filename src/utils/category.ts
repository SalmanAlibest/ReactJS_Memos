import axios from "axios";

export const getCategory = async () => {
  const APIData = await axios.get(
    "https://us-central1-react-test-dd08f.cloudfunctions.net/categories",

    {
      headers: {
        // "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "POST",
        // "Access-Control-Max-Age": "0",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Headers": "Authorization",
        "test-id": "1234",
      },
    }
  );

  console.log("Category", APIData);
  const categories = APIData?.data;
  return { categories };
};
