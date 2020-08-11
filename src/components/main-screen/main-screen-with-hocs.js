import withActiveElement from "../../hocs/with-active-element/with-active-element";
import withCheckAuth from "../../hocs/with-check-auth/with-check-auth";
import MainScreen from "./main-screen.jsx";

const wrapped = withActiveElement(MainScreen);

export default withCheckAuth()(wrapped);
