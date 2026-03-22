import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "ToCart - Admin | ToCart",
    description: "ToCart - Admin Dashboard by Param Shelke.",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
