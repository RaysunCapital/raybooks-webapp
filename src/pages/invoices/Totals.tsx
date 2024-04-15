import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { useRecordContext, useTranslate } from 'react-admin';

import { Invoice } from '../types';
import { TableCellRight } from './TableCellRight';

const Totals = () => {
    const record = useRecordContext<Invoice>();
    const translate = useTranslate();

    return (
        <Table sx={{ minWidth: '35em' }}>
            <TableBody>
                <TableRow>
                    <TableCell>
                        {translate('resources.commands.fields.basket.taxes')}
                    </TableCell>
                    <TableCellRight>
                        {record?.taxes?.toLocaleString(undefined, {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </TableCellRight>
                </TableRow>
                <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>
                        {translate('resources.commands.fields.basket.total')}
                    </TableCell>
                    <TableCellRight sx={{ fontWeight: 'bold' }}>
                        {record?.invoice_total?.toLocaleString(undefined, {
                            style: 'currency',
                            currency: 'USD',
                        })}
                    </TableCellRight>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default Totals;