import { memo } from "react";
import All from "./components/all";

const AntD = () => {
    return (
        <div className="AntD">
            <h2>AntD</h2>
            <All />
        </div>
    );
};

export default memo(AntD);
