import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page({}) {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Invoices", href: "/dashboard/invoices" },
                    {
                        label: "Create",
                        href: "/dashboard/invoices/create",
                        active: true,
                    },
                ]}
            />
            <Form customers={await fetchCustomers()} />
        </main>
    );
}
