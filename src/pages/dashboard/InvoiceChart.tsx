import { Card, CardHeader, CardContent } from '@mui/material';
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from 'recharts';
import { useTranslate } from 'react-admin';
import { format, subDays, addDays } from 'date-fns';

import { Invoice } from '../types';

const lastDay = new Date();
const lastMonthDays = Array.from({ length: 30 }, (_, i) => subDays(lastDay, i));
const aMonthAgo = subDays(new Date(), 30);

const dateFormatter = (date: number): string =>
    new Date(date).toLocaleDateString();

const aggregateInvoicesByDay = (invoices: Invoice[]): { [key: string]: number } =>
    invoices
        .filter((invoice: Invoice) => invoice.status !== 'cancelled')
        .reduce((acc, curr) => {
            const day = format(new Date(curr.date), 'yyyy-MM-dd');
            if (!acc[day]) {
                acc[day] = 0;
            }
            acc[day] += curr.invoice_total;
            return acc;
        }, {} as { [key: string]: number });

const getRevenuePerDay = (invoices: Invoice[]): TotalByDay[] => {
    const daysWithRevenue = aggregateInvoicesByDay(invoices);
    return lastMonthDays.map(date => ({
        date: date.getTime(),
        total: daysWithRevenue[format(new Date(date), 'yyyy-MM-dd')] || 0,
    }));
};

const InvoiceChart = (props: { orders?: Invoice[] }) => {
    const { orders } = props;
    const translate = useTranslate();
    if (!orders) return null;

    return (
        <Card>
            <CardHeader title={translate('books.dashboard.month_history')} />
            <CardContent>
                <div style={{ width: '100%', height: 300 }}>
                    <ResponsiveContainer>
                        <AreaChart data={getRevenuePerDay(orders)}>
                            <defs>
                                <linearGradient
                                    id="colorUv"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="5%"
                                        stopColor="#fdcd52"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#fdcd52"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="date"
                                name="Date"
                                type="number"
                                scale="time"
                                domain={[
                                    addDays(aMonthAgo, 1).getTime(),
                                    new Date().getTime(),
                                ]}
                                tickFormatter={dateFormatter}
                            />
                            <YAxis dataKey="total" name="Revenue" unit="$" />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip
                                cursor={{ strokeDasharray: '3 3' }}
                                formatter={(value: any) =>
                                    new Intl.NumberFormat(undefined, {
                                        style: 'currency',
                                        currency: 'USD',
                                    }).format(value)
                                }
                                labelFormatter={(label: any) =>
                                    dateFormatter(label)
                                }
                            />
                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#fdcd52"
                                strokeWidth={2}
                                fill="url(#colorUv)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
};

interface TotalByDay {
    date: number;
    total: number;
}

export default InvoiceChart;
