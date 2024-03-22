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
} from 'react-admin';

import InvoiceShow from './InvoiceShow';

const listFilters = [
    <DateInput source="date_gte" alwaysOn key={null}/>,
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
            rowClick="expand"
            expand={<InvoiceShow />}
            sx={{
                '& .column-customer_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
            <DateField source="date" />
            <TextField source="id" />
            <TextField source="total" />
            <ReferenceField label="Customer" source="customer_id" reference="customers">
                <TextField source="name" /> {/* Assuming name is the field representing customer name */}
            </ReferenceField>
        </DatagridConfigurable>
    </List>
);

export default InvoiceList;