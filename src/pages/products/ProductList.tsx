import {
    List,
    DatagridConfigurable,
    TextField,
    CreateButton,
    DateInput,
    TopToolbar,
    ExportButton,
    SelectColumnsButton,
    ReferenceInput,
    FilterButton,
} from 'react-admin';

import ProductShow from './ProductShow';

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

const ProductList = () => (
    <List
        filters={listFilters}
        perPage={25}
        sort={{ field: 'date', order: 'DESC' }}
        actions={<ListActions />}
    >
        <DatagridConfigurable
            rowClick="edit"
            expand={<ProductShow />}
            sx={{}}
        >
            <TextField source="name" />
            <TextField source="description" />
        </DatagridConfigurable>
    </List>
);

export default ProductList;