import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "ToCart - Admin",
    description: "ToCart - Admin Dashboard",
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
