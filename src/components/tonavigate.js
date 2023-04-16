import { useNavigate } from "react-router-dom";

    export function tonavigate(Component) {
      return (props) => (
       <Component {...props} navigate={useNavigate()} />
  );
}
//wraps the component and returns a new componesnt by adding navigate prop to that old component using the spread