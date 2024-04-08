import { Loading, useGetIdentity, useGetOne } from 'react-admin';


const CompanyShow = () => {
    const { data } = useGetIdentity();
    const { data: user, isLoading, error } = useGetOne('profiles', { id: data?.id });
    if (isLoading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    return <div>User {user.first_name}</div>;
};
export default CompanyShow;