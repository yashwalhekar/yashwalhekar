import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

import ExpandMore from "@mui/icons-material/ExpandMore";

const AccordionMui = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          
        >
            MUI
        </AccordionSummary>
        <AccordionDetails>
          Material UI is an open-source React component library that implements
          Google's Material Design. It's comprehensive and can be used in
          production out of the box.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionMui;
