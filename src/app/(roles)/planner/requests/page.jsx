import LazyRequestComp from "./LazyRequestComp";

export const metadata = {
    title: "Requests Management",
    description: "Manage requests, view details, and filter by status.",
    keywords: "requests, management, status, booking",
};
const RequestsServerPage = () => {
    return (
        <LazyRequestComp/>
    );
}

export default RequestsServerPage;