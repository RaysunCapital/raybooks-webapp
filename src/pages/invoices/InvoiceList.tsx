import {
    List,
    DatagridConfigurable,
    TextField,
    DateField,
    CreateButton,
    DateInput,
    TopToolbar,
    ExportButton,
    SelectColumnsButton,
    ReferenceInput,
    FilterButton,
    ReferenceField,
    NumberField,
} from 'react-admin';

import FullNameField from '../customers/FullNameField'
import AddressField from '../customers/AddressField';
import InvoiceShow from './InvoiceShow';

const listFilters = [
    <DateInput source="date_gte" alwaysOn key={null} />,
    <DateInput source="date_lte" alwaysOn key={null} />,
    <ReferenceInput source="customer_id" reference="customers" key={null} />,
];

const ListActions = () => (
    <TopToolbar>
        <CreateButton />
        <FilterButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const InvoiceList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
        actions={<ListActions />}
    >
        <DatagridConfigurable
            rowClick="edit"
            expand={<InvoiceShow />}
            sx={{
                '& .column-customer_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
            <TextField source="id" label="Inovice Number"/>
            <DateField source="date" />
            <ReferenceField source="customer_id" reference="customers">
                <FullNameField />
            </ReferenceField>
            <ReferenceField
                source="customer_id"
                reference="customers"
                link={false}
                label="resources.invoices.fields.address"
            >
                <AddressField />
            </ReferenceField>
            <TextField source='status' />
            <NumberField source="taxes" />
            <NumberField source="total" />
        </DatagridConfigurable>
    </List>
);

export default InvoiceList;