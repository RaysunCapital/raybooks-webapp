import { useState } from "react";
import { ReferenceInput, AutocompleteInput, NumberInput } from "react-admin";

const LineItem = () => {
    const [productPrice, setProductPrice] = useState(null);

    const handleProductChange = async (event: any, product: any) => {
        setProductPrice(product.price);
    };

    return (
        <>
            <ReferenceInput source="product_id" reference="products">
                <AutocompleteInput optionText="name" sx={{ marginRight: '30px' }} onChange={handleProductChange} />
            </ReferenceInput>
            <NumberInput source="quantity" sx={{ marginRight: '30px' }} />
            <NumberInput source="rate" sx={{ marginRight: '30px' }} label="Price" defaultValue={productPrice} disabled />
            <NumberInput source="total" label="Total" disabled={true} /> {/* Disabled as it's calculated */}

        </>
    );
};

export default LineItem