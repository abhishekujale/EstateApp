import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
    try {
        const res = await apiRequest("/post/" + params.id); // Make sure the API endpoint is correct
        console.log(res.data);
        return res;
    } catch (error) {
        console.error("Failed to fetch post data:", error);
        throw new Response("Failed to load post data", { status: 500 });
    }
};
