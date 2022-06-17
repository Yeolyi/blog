import { useLocation } from "react-router";

export default function NotFound() {
    let location = useLocation();
    return <p>{`'${decodeURI(location.pathname)}' 에는 만들어놓은게 없어요!`}</p>;
}
