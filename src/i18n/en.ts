import { TranslationMessages } from 'react-admin';
import englishMessages from 'ra-language-english';

const customEnglishMessages: TranslationMessages = {
    ...englishMessages,
    books: {
        search: 'Search',
        configuration: 'Configuration',
        language: 'Language',
        theme: {
            name: 'Theme',
            light: 'Light',
            dark: 'Dark',
        },
        dashboard: {
            monthly_revenue: 'Monthly Revenue',
            month_history: '30 Day Revenue History',
            expenses: 'Monthly Expenses',
            new_customers: 'New Customers',
            all_customers: 'See all customers',
            pending_invoices: 'Pending Invoices',
            order: {
                items:
                    'Invoiced to %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items',
            },
            welcome: {
                title: 'Welcome to RayBooks',
                subtitle:
                    "Manage your business with ease!",
                ra_button: 'New Invoice',
                demo_button: 'Add Customer',
            },
        },
        menu: {
            sales: 'Sales',
            purchases: 'Purchases'
        },
        profile: {
            title: 'Company',
        },
        events: {
            review: {
                title: 'Posted review on "%{product}"',
            },
            order: {
                title: 'Ordered 1 poster |||| Ordered %{smart_count} posters',
            },
        },
    },
    resources: {
        customers: {
            name: 'Customer |||| Customers',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                full_name: 'Name',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
                stateAbbr: 'State',
            },
            filters: {
                last_visited: 'Last visited',
                today: 'Today',
                this_week: 'This week',
                last_week: 'Last week',
                this_month: 'This month',
                last_month: 'Last month',
                earlier: 'Earlier',
                has_ordered: 'Has ordered',
                has_newsletter: 'Has newsletter',
                group: 'Segment',
            },
            fieldGroups: {
                identity: 'Customer',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        vendors: {
            name: 'Vendor |||| Vendors',
            fields: {
                commands: 'Orders',
                first_seen: 'First seen',
                full_name: 'Name',
                groups: 'Segments',
                last_seen: 'Last seen',
                last_seen_gte: 'Visited Since',
                name: 'Name',
                total_spent: 'Total spent',
                password: 'Password',
                confirm_password: 'Confirm password',
                stateAbbr: 'State',
            },
            filters: {
                last_visited: 'Last visited',
                today: 'Today',
                this_week: 'This week',
                last_week: 'Last week',
                this_month: 'This month',
                last_month: 'Last month',
                earlier: 'Earlier',
                has_ordered: 'Has ordered',
                has_newsletter: 'Has newsletter',
                group: 'Segment',
            },
            fieldGroups: {
                identity: 'Vendor',
                address: 'Address',
                stats: 'Stats',
                history: 'History',
                password: 'Password',
                change_password: 'Change Password',
            },
            page: {
                delete: 'Delete Customer',
            },
            errors: {
                password_mismatch:
                    'The password confirmation is not the same as the password.',
            },
        },
        invoices: {
            name: 'Invoice |||| Invoices',
            action: {
                create: 'New Invoice',
            },
            fields: {
                date: 'Invoice date',
                customer_id: 'Customer',
                command_id: 'Order',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
            fieldGroups: {
                identity: 'Customer'
            },
        },
        expenses: {
            name: 'Expense |||| Expenses',
            action: {
                create: 'New Expense',
            },
            fields: {
                date: 'Expense date',
                supplier_id: 'Supplier',
                expense_id: 'Expense',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        estimates: {
            name: 'Estimate |||| Estimates',
            action: {
                create: 'New Estimate',
            },
            fields: {
                date: 'Estimate date',
                customer_id: 'Customer',
                estimate_id: 'Estimate',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        products: {
            name: 'Product |||| Products',
            actions: {
                create: 'New Product'
            },
            fields: {
                category_id: 'Category',
                height_gte: 'Min height',
                height_lte: 'Max height',
                height: 'Height',
                image: 'Image',
                price: 'Price',
                reference: 'Reference',
                sales: 'Sales',
                stock_lte: 'Low Stock',
                stock: 'Stock',
                thumbnail: 'Thumbnail',
                width_gte: 'Min width',
                width_lte: 'Max width',
                width: 'Width',
            },
            tabs: {
                image: 'Image',
                details: 'Details',
                description: 'Description',
                reviews: 'Reviews',
            },
            filters: {
                categories: 'Categories',
                stock: 'Stock',
                no_stock: 'Out of stock',
                low_stock: '1 - 9 items',
                average_stock: '10 - 49 items',
                enough_stock: '50 items & more',
                sales: 'Sales',
                best_sellers: 'Best sellers',
                average_sellers: 'Average',
                low_sellers: 'Low',
                never_sold: 'Never sold',
            },
        },
        reports: {
            name: 'Report |||| Reports',
            fields: {
                date: 'Invoice date',
                customer_id: 'Customer',
                command_id: 'Order',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                total_gte: 'Min amount',
                address: 'Address',
            },
        },
        commands: {
            name: 'Order |||| Orders',
            amount: '1 order |||| %{smart_count} orders',
            title: 'Order %{reference}',
            fields: {
                basket: {
                    delivery: 'Delivery',
                    reference: 'Reference',
                    quantity: 'Quantity',
                    sum: 'Sum',
                    tax_rate: 'Tax Rate',
                    taxes: 'Tax',
                    total: 'Total',
                    unit_price: 'Unit Price',
                },
                address: 'Address',
                customer_id: 'Customer',
                date_gte: 'Passed Since',
                date_lte: 'Passed Before',
                nb_items: 'Nb Items',
                total_gte: 'Min amount',
                status: 'Status',
                returned: 'Returned',
            },
            section: {
                order: 'Order',
                customer: 'Customer',
                shipping_address: 'Shipping Address',
                items: 'Items',
                total: 'Totals',
            },
        },
    },
};

export default customEnglishMessages;