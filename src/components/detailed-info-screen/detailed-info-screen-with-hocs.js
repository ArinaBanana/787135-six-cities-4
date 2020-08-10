import withActiveElement from "../../hocs/with-active-element/with-active-element";
import withCheckAuth from "../../hocs/with-check-auth/with-check-auth";
import DetailedInfoScreen from "./detailed-info-screen.jsx";

const wrapped = withActiveElement(DetailedInfoScreen);

export default withCheckAuth(wrapped);
