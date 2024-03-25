import { Card, CardHeader, List } from '@mui/material';
import { useTranslate } from 'react-admin';

import { Invoice } from '../types';
import { PendingInvoice } from './PendingInvoice';

interface Props {
    invoices?: Invoice[];
}

const PendingInvoices = (props: Props) => {
    const { invoices = [] } = props;
    const translate = useTranslate();

    return (
        <Card sx={{ flex: 1 }}>
            <CardHeader title={translate('books.dashboard.pending_invoices')} />
            <List dense={true}>
                {invoices.map(record => (
                    <PendingInvoice key={record.id} invoice={record} />
                ))}
            </List>
        </Card>
    );
};

export default PendingInvoices;
