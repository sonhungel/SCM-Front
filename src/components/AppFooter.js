import React from "react";
import { CFooter } from "@coreui/react";

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        SCM system
        <span className="ms-1">&copy; 2021 UIT</span>
      </div>
    </CFooter>
  );
};

export default React.memo(AppFooter);
