import withCheckAuth from "../../hocs/with-check-auth/with-check-auth";
import FavoriteScreen from "./favorite-screen.jsx";

export default withCheckAuth(true)(FavoriteScreen);
