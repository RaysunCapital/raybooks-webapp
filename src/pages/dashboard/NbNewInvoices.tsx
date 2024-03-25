import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslate } from 'react-admin';

import CardWithIcon from './CardWithIcon';

interface Props {
    value?: number;
}

const NbNewOrders = (props: Props) => {
    const { value } = props;
    const translate = useTranslate();
    return (
        <CardWithIcon
            to="/expenses"
            icon={ShoppingCartIcon}
            title={translate('books.dashboard.expenses')}
            subtitle={'2000'}
        />
    );
};

export default NbNewOrders;
