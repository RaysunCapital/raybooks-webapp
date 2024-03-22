import {
    Create,
    DateInput,
    SimpleForm,
    useTranslate,
} from 'react-admin';
import { Typography } from '@mui/material';

const VendorsCreate = () => (
    <Create>
        <SimpleForm
            sx={{ maxWidth: 500 }}

            defaultValues={{
                date: new Date(),
            }}
        >
            <SectionTitle label="resources.invoices.fieldGroups.identity" />

            <DateInput source="date" />
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

export default VendorsCreate;