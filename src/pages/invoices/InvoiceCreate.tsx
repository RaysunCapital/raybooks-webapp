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
} from 'react-admin';
import { Typography, Grid } from '@mui/material';
import './styles.css';
import LineItem from './LineItem';

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label as string)}
        </Typography>
    );
};

const ProductPriceInput = () => {

    return (
        <>
            <ArrayInput label="Items" source="products">
                <SimpleFormIterator sx={{ display: 'contents' }}>
                    <LineItem />
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