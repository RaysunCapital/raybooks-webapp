import {
    Create,
    NumberInput,
    SimpleForm,
    TextInput,
    useTranslate,
} from 'react-admin';
import { Typography } from '@mui/material';

const ProductCreate = () => (
    <Create>
        <SimpleForm
            sx={{ maxWidth: 500 }}

            defaultValues={{
                date: new Date(),
            }}
        >
            <SectionTitle label="resources.products.actions.create" />

            <TextInput source="name" />

            <NumberInput source="price" />

            <TextInput source="description" />
            
        </SimpleForm>
    </Create>
);

const SectionTitle = ({ label }: { label: string }) => {
    const translate = useTranslate();

    return (
        <Typography variant="h6" gutterBottom>
            {translate(label as string)}
        </Typography>
    );
};

// const Separator = () => <Box pt="1em" />;

export default ProductCreate;