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

import AddressField from '../vendors/AddressField';
import ExpenseShow from './ExpenseShow';

const listFilters = [
    <DateInput source="date_gte" alwaysOn key={null} />,
    <DateInput source="date_lte" alwaysOn key={null} />,
    <ReferenceInput source="vendor_id" reference="vendors" key={null} />,
];

const ListActions = () => (
    <TopToolbar>
        <CreateButton />
        <FilterButton />
        <SelectColumnsButton />
        <ExportButton />
    </TopToolbar>
);

const ExpenseList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
        actions={<ListActions />}
    >
        <DatagridConfigurable
            rowClick="edit"
            expand={<ExpenseShow />}
            sx={{
                '& .column-vendor_id': {
                    display: { xs: 'none', md: 'table-cell' },
                },
                '& .column-taxes': {
                    display: { xs: 'none', md: 'table-cell' },
                },
            }}
        >
            <TextField source="id" label="Expense Number"/>
            <DateField source="date" />
            <ReferenceField source="vendor_id" reference="vendors">
            <TextField source="company"/>
            </ReferenceField>
            <ReferenceField
                source="vendor_id"
                reference="vendors"
                link={false}
                label="resources.expenses.fields.address"
            >
                <AddressField />
            </ReferenceField>
            <TextField source='status' />
            <NumberField source="taxes" />
            <NumberField source="expense_total" label="Total"/>
        </DatagridConfigurable>
    </List>
);

export default ExpenseList;