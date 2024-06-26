import { useMemo, CSSProperties } from 'react';
import { useGetList } from 'react-admin';
import { useMediaQuery, Theme } from '@mui/material';
// import { subDays, startOfDay } from 'date-fns';

import Welcome from './Welcome';
import MonthlyRevenue from './MonthlyRevenue';
import MonthlyExpenses from './MonthlyExpenses';
import PendingInvoices from './PendingInvoices';
import NewCustomers from './NewCustomers';
import InvoiceChart from './InvoiceChart';

import { Invoice } from '../types';
import { Expense } from '../types';

interface InvoiceStats {
    revenue: number;
    pendingInvoices: Invoice[];
}

interface ExpenseStats {
    monthlyExpenses: number;
}

interface State {
    pendingInvoices?: Invoice[];
    recentInvoices?: Invoice[];
    revenue?: string;
    monthlyExpenses?: string;
    expenses?: string;
}

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '0.5em' },
    rightCol: { flex: 1, marginLeft: '0.5em' },
    singleCol: { marginTop: '1em', marginBottom: '1em' },
};

const Spacer = () => <span style={{ width: '1em' }} />;
const VerticalSpacer = () => <span style={{ height: '1em' }} />;

const Dashboard = () => {
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('sm')
    );
    const isSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('lg')
    );
    // const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    const { data: invoices } = useGetList<Invoice>('invoices', {
        filter: {  },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 50 },
    });

    const { data: expenses } = useGetList<Expense>('expenses', {
        filter: {  },
        sort: { field: 'date', order: 'DESC' },
        pagination: { page: 1, perPage: 50 },
    });

    const invoiceAggregation = useMemo<State>(() => {
        if (!invoices) return {};

        const aggregations = invoices
            .filter(invoice => invoice.status !== 'cancelled')
            .reduce(
                (stats: InvoiceStats, invoice) => {
                    if (invoice.status !== 'cancelled') {
                        stats.revenue += invoice.invoice_total;
                    }
                    if (invoice.status === 'unpaid') {
                        stats.pendingInvoices.push(invoice);
                    }
                    return stats;
                },
                {
                    revenue: 0,
                    pendingInvoices: [],
                }
            );
        return {
            recentInvoices: invoices,
            revenue: aggregations.revenue.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }),
            // nbNewInvoices: aggregations.nbNewInvoices,
            pendingInvoices: aggregations.pendingInvoices,
        };
    }, [invoices]);

    const expenseAggregation = useMemo<State>(() => {
        if (!expenses) return {};
        
        const aggregations = expenses
            .filter(expense => expense.status !== 'cancelled')
            .reduce(
                (stats: ExpenseStats, expense) => {
                    if (expense.status !== 'cancelled') {
                        stats.monthlyExpenses += expense.expense_total;
                    }
                    return stats;
                },
                {
                    monthlyExpenses: 0
                }
            );
        return {
            monthlyExpenses: aggregations.monthlyExpenses.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            })
        };
    }, [expenses]);

    const { pendingInvoices, revenue, recentInvoices } = invoiceAggregation;

    const { monthlyExpenses } = expenseAggregation;
   
    return isXSmall ? (
        <div>
            <div style={styles.flexColumn as CSSProperties}>
                <Welcome />
                <MonthlyRevenue value={revenue} />
                <VerticalSpacer />
                <MonthlyExpenses value={monthlyExpenses} />
                <VerticalSpacer />
                <PendingInvoices invoices={pendingInvoices} />
            </div>
        </div>
    ) : isSmall ? (
        <div style={styles.flexColumn as CSSProperties}>
            <div style={styles.singleCol}>
                <Welcome />
            </div>
            <div style={styles.flex}>
                <MonthlyRevenue value={revenue} />
                <Spacer />
                <MonthlyExpenses value={monthlyExpenses} />
            </div>
            <div style={styles.singleCol}>
                <InvoiceChart orders={recentInvoices} />
            </div>
            <div style={styles.singleCol}>
                <PendingInvoices invoices={pendingInvoices} />
            </div>
        </div>
    ) : (
        <>
            <Welcome />
            <div style={styles.flex}>
                <div style={styles.leftCol}>
                    <div style={styles.flex}>
                        <MonthlyRevenue value={revenue} />
                        <Spacer />
                        <MonthlyExpenses value={monthlyExpenses} />
                    </div>
                    <div style={styles.singleCol}>
                        <InvoiceChart orders={recentInvoices} />
                    </div>
                    <div style={styles.singleCol}>
                        <PendingInvoices invoices={pendingInvoices} />
                    </div>
                </div>
                <div style={styles.rightCol}>
                    <div style={styles.flex}>
                        <NewCustomers />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;