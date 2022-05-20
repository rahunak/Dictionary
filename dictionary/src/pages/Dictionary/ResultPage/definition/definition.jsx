import React, { Fragment } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';

class Definition extends React.Component {
    render() {
        return (<>
            {
                this.props.definitions.map(el => {
                    return (<Fragment key={el.definition.toString()}>
                        {!el.example
                            && <List
                                sx={{ bgcolor: "background.paper", p: 2 }}
                                component="nav"
                                aria-labelledby="nested-list-subheader">
                                <Divider light />
                                <ListItemText primary={el.definition} />
                            </List>
                        }
                        {Boolean(el.example)
                            && <Accordion >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: "background.paper", p: 2 }}>
                                    <Typography>{el.definition}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {el.example}
                                    </Typography>
                                </AccordionDetails>

                            </Accordion>}
                    </Fragment>
                    );
                })
            }
        </>


        );
    }

}

Definition.propTypes = {
    definitions: PropTypes.object.isRequired,
  };
export default Definition;