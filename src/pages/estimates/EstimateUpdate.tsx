import {
    DateInput,
    SimpleForm,
    useTranslate,
    ReferenceInput,
    AutocompleteInput,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    FormDataConsumer,
    Edit,
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

const EstimateEdit = () => (
    <Edit>
        <SimpleForm
            sx={{}}

            defaultValues={{
                date: new Date(),
            }}
        >
            <SectionTitle label="resources.estimates.action.edit" />

            <div style={{ display: 'flex' }}>
                <DateInput source="date" sx={{ marginRight: '30px' }} />

                <ReferenceInput label="Customer" source="customer_id" reference="customers">
                    <AutocompleteInput label="Customer" optionText="last_name" />
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
                source="estimate_total"
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
                    <div>Valid for</div>
                    <NumberInput
                        source="validity"
                        min={0}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">days</InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </SimpleForm>
    </Edit >
);

export default EstimateEdit;