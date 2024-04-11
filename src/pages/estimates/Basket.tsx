import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { Link, useTranslate, useGetMany, useRecordContext } from 'react-admin';

import { Invoice, Product } from '../types';
import { TableCellRight } from './TableCellRight';

const Basket = () => {
    const record = useRecordContext<Invoice>();
    const translate = useTranslate();

    const productIds = record ? record.products.map(item => item.product_id) : [];

    const { isLoading, data: products } = useGetMany<Product>(
        'products',
        { ids: productIds },
        { enabled: !!record }
    );
    const productsById = products
        ? products.reduce((acc, product) => {
              acc[product.id] = product;
              return acc;
          }, {} as any)
        : {};

    if (isLoading || !record || !products) return null;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        {translate(
                            'resources.commands.fields.basket.name'
                        )}
                    </TableCell>
                    <TableCellRight>
                        {translate(
                            'resources.commands.fields.basket.unit_price'
                        )}
                    </TableCellRight>
                    <TableCellRight>
                        {translate('resources.commands.fields.basket.quantity')}
                    </TableCellRight>
                    <TableCellRight>
                        {translate('resources.commands.fields.basket.total')}
                    </TableCellRight>
                </TableRow>
            </TableHead>
            <TableBody>
                {record.products.map((item: any) => (
                    <TableRow key={item.product_id}>
                        <TableCell>
                            <Link to={`/products/${item.product_id}`}>
                                {productsById[item.product_id].name}
                            </Link>
                        </TableCell>
                        <TableCellRight>
                            {productsById[item.product_id].price.toLocaleString(
                                undefined,
                                {
                                    style: 'currency',
                                    currency: 'USD',
                                }
                            )}
                        </TableCellRight>
                        <TableCellRight>{item.quantity}</TableCellRight>
                        <TableCellRight>
                            {(
                                productsById[item.product_id].price *
                                item.quantity
                            ).toLocaleString(undefined, {
                                style: 'currency',
                                currency: 'USD',
                            })}
                        </TableCellRight>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Basket;