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
} from 'react-admin';
import VendorsShow from './VendorShow';

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

const VendorsList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
        actions={<ListActions />}
    >
        <DatagridConfigurable
            rowClick="expand"
            expand={<VendorsShow />}
            sx={{
                '& .column-customer_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
            <TextField source="id" />
            <DateField source="date" />
        </DatagridConfigurable>
    </List>
);

export default VendorsList;