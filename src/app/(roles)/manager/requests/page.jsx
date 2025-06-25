import LazyRequestComp from "./LazyRequestComp";
export const metadata = {
  title: "Booking Requests",
  description: "Manage booking requests for artists.",
  keywords: "booking, requests, artists, management",
};

const RequestsServerPage = () => {
  return (
    <LazyRequestComp />
  );
}
export default RequestsServerPage;
