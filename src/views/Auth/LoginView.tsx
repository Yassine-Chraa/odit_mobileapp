import { Text } from "react-native"
import UseAuthViewController from "../../viewcontrollers/useAuthViewController";

const LoginView = (): JSX.Element => {
    const { login } = UseAuthViewController();
    return (
        <>
            <Text>Login Screen 2</Text>
        </>
    )
}
export default LoginView;