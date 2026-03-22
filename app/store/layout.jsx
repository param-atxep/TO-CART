import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "ToCart - Store Dashboard",
    description: "ToCart - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
