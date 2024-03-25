import {
    Create,
    DateInput,
    SimpleForm,
    useTranslate,
    ReferenceInput,
    AutocompleteInput,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    SelectInput,
    BooleanInput,
} from 'react-admin';
import { Box, Typography, Grid } from '@mui/material';
import './styles.css';
import { useState } from 'react';

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label as string)}
        </Typography>
    );
};

const ProductPriceInput = () => {
    const [productPrice, setProductPrice] = useState(null);

    const handleProductChange = async (event: any, product: any) => {
        setProductPrice(product.price);
    };

    return (
        <>
            <ArrayInput label="Items" source="products">
                <SimpleFormIterator sx={{ display: 'contents' }}>
                    <ReferenceInput source="product_id" reference="products">
                        <AutocompleteInput optionText="name" sx={{ marginRight: '30px' }} onChange={handleProductChange} />
                    </ReferenceInput>
                    <NumberInput source="quantity" sx={{ marginRight: '30px' }} />
                    <NumberInput source="rate" sx={{ marginRight: '30px' }} label="Price" defaultValue={productPrice} disabled />
                    <NumberInput source="total" label="Total" disabled={true} /> {/* Disabled as it's calculated */}
                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
};

const InvoiceCreate = () => (
    <Create>
        <SimpleForm
            sx={{ maxWidth: '800px' }}

            defaultValues={{
                date: new Date(),
            }}
        >
            <SectionTitle label="resources.invoices.action.create" />

            <div style={{ display: 'flex' }}>
                <DateInput source="date" sx={{ marginRight: '30px' }} />

                <ReferenceInput label="Customer" source="customer_id" reference="customers">
                    <AutocompleteInput label="Customer" optionText="last_name" />
                </ReferenceInput>

            </div>

            <ProductPriceInput />

            <NumberInput source="tax_rate" sx={{ marginRight: '30px' }} />
            <NumberInput source="taxes" sx={{ marginRight: '30px' }} disabled={true} />
            <NumberInput source="total" disabled={true} />

            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <SelectInput
                        source="status"
                        choices={[
                            {
                                id: 'unpaid',
                                name: 'unpaid',
                            },
                            {
                                id: 'paid',
                                name: 'paid',
                            },
                            {
                                id: 'cancelled',
                                name: 'cancelled',
                            },
                        ]}
                    />
                </Grid>
            </Grid>
        </SimpleForm>
    </Create >
);

export default InvoiceCreate;