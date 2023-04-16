import { useParams} from "react-router-dom";

    export function toparams(Component) {
      return (props) => (
       <Component {...props} params={useParams()} />
  );
}