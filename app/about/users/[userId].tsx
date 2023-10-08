import { useRouter } from 'next/router';

const UserPage = () => {
    const router = useRouter();
    const { userId } = router.query;

    return (
        <div>
            <h1>User Details</h1>
            <p>User ID: {userId}</p>
        </div>
    );
};

export default UserPage;