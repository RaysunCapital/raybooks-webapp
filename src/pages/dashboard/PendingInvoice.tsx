import {
    ListItem,
    ListItemSecondaryAction,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslate, useReference } from 'react-admin';
import { Customer, Invoice } from '../types';

interface Props {
    invoice: Invoice;
}

export const PendingInvoice = (props: Props) => {
    const { invoice } = props;
    const translate = useTranslate();
    const { referenceRecord: customer, isLoading } = useReference<Customer>({
        reference: 'customers',
        id: invoice.customer_id,
    });

    return (
        <ListItem button component={Link} to={`/invoices/${invoice.id}`}>
            <ListItemAvatar>
                {isLoading ? (
                    <Avatar />
                ) : (
                    <Avatar
                        src={`${customer?.avatar}?size=32x32`}
                        sx={{ bgcolor: 'background.paper' }}
                        alt={`${customer?.first_name} ${customer?.last_name}`}
                    />
                )}
            </ListItemAvatar>
            <ListItemText
                primary={new Date(invoice.date).toLocaleString('en-GB')}
                secondary={translate('books.dashboard.order.items', {
                    smart_count: invoice.products?.length,
                    nb_items: invoice.products?.length,
                    customer_name: customer
                        ? `${customer.first_name} ${customer.last_name}`
                        : '',
                })}
            />
            <ListItemSecondaryAction>
                <Box
                    component="span"
                    sx={{
                        marginRight: '1em',
                        color: 'text.primary',
                    }}
                >
                    {invoice.invoice_total}$
                </Box>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
