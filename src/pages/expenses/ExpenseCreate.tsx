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
    FormDataConsumer,
} from 'react-admin';
import { Typography, Grid } from '@mui/material';
import './../../layout/styles.css';
import { useState } from 'react';
import { InputAdornment } from '@mui/material';

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

    const handleProductChange = async (event: any, product: any, formData) => {
        console.log(formData)
        setProductPrice(product.price);
    };

    return (
        <>
            <ArrayInput label="Items" source="products">
                <SimpleFormIterator inline>
                    <FormDataConsumer>
                        {({
                            formData, // The whole form data
                            scopedFormData, // The data for this item of the ArrayInput
                            getSource, // A function to get the valid source inside an ArrayInput
                        }) =>
                        (
                            <>
                                {/* onChange={(event, record) => handleProductChange(event, record, formData)} */}
                                <ReferenceInput source={getSource('product_id')} reference="products">
                                    <AutocompleteInput optionText="name" />
                                </ReferenceInput>
                                <NumberInput min={1} source={getSource('quantity')} defaultValue={1} />
                                <NumberInput
                                    min={0}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">$</InputAdornment>
                                        ),
                                    }}
                                    source={getSource('rate')}
                                    label="Price"
                                    // defaultValue={productPrice}
                                    // disabled
                                />
                                <NumberInput
                                    source="total"
                                    label="Total"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">$</InputAdornment>
                                        ),
                                    }}
                                    // defaultValue={scopedFormData.quantity * scopedFormData.rate}
                                />
                            </>
                        )
                        }
                    </FormDataConsumer>
                </SimpleFormIterator>
            </ArrayInput>
        </>
    );
};

const ExpenseCreate = () => (
    <Create>
        <SimpleForm
            sx={{}}

            defaultValues={{
                date: new Date(),
            }}
        >
            <SectionTitle label="resources.expenses.action.create" />

            <div style={{ display: 'flex' }}>
                <DateInput source="date" sx={{ marginRight: '30px' }} />

                <ReferenceInput label="Vendor" source="vendor_id" reference="vendors">
                    <AutocompleteInput label="Vendor" optionText="company" />
                </ReferenceInput>

            </div>

            <ProductPriceInput />

            <NumberInput
                source="tax_rate"
                sx={{ marginRight: '30px' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">%</InputAdornment>
                    ),
                }}
                />
            <NumberInput
            source="taxes"
            sx={{ marginRight: '30px' }}
            // disabled={true}
            min={0}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                ),
            }}
            />
            <NumberInput
            source="expense_total"
            // disabled={true}
            min={0}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                ),
            }}
            />

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

export default ExpenseCreate;