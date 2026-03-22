import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "ToCart - Store Dashboard | ToCart",
    description: "ToCart - Store Dashboard by Param Shelke.",
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
