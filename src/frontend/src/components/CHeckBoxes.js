import Checkbox from "@mui/material/Checkbox";
import React from "@types/react";

const CHeckBoxes = ( ) => {

return(
<div>
    <Checkbox
        onClickCapture={() => filterItem("small")}
        {...label} defaultChecked />
    <Checkbox {...label} />
    <Checkbox {...label} disabled />
    <Checkbox {...label} disabled checked />
</div>
    )
    }
