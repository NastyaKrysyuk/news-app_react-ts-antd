import { useAppSelector } from './redux-hooks';

export function useAuth() {
    const {email, admins, id} = useAppSelector(state => state.authUser);

    return {
        isAuth: !!email,
        email,
        admins,
        id,
    };
}