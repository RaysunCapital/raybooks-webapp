import {
    Edit,
    NumberInput,
    SimpleForm,
    TextInput,
    useTranslate,
} from 'react-admin';
import { Typography } from '@mui/material';

const ProductEdit = () => (
    <Edit title="Edit Product">
        <SimpleForm
            sx={{ maxWidth: 500 }}
        >
            <SectionTitle label="resources.products.actions.edit" />

            <TextInput source="name" />

            <NumberInput source="price" />

            <TextInput source="description" />
            
        </SimpleForm>
    </Edit>
);

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label)}
        </Typography>
    );
};

export default ProductEdit;