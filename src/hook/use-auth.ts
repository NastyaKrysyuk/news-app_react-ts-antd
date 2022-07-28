import { useAppSelector } from './redux-hook';

export function useAuth() {
    const {email, admins, id} = useAppSelector(state => state.authUser);

    return {
        isAuth: !!email,
        email,
        admins,
        id,
    };
}