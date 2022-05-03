import React, { Fragment } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemText from '@mui/material/ListItemText';
function Definition({ definitions }) {
    return (<>
        {
            definitions.map(el => {
                return (<Fragment key={el.definition.toString()}>
                    {!Boolean(el.example)
                        && <Accordion className="accordion"
                            sx={{  bgcolor: 'background.paper',}}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemText primary={el.definition} className="listItem" />
                        </Accordion>
                    }

                    {Boolean(el.example) && <Accordion className="accordion">

                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{el.definition}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {el.example}
                            </Typography>
                        </AccordionDetails>

                    </Accordion>}
                </Fragment>
                )
            })
        }
    </>


    )
}
export default Definition;