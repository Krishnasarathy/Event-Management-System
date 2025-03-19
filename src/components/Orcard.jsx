
import { Rating } from "@mui/material";
import PropTypes  from "prop-types";

import { Panel } from "rsuite";
const OCards = ({name,content,n}) => {
  
  return (
    
    <Panel className="cd" shaded bordered bodyFill style={{width: 240 }}>
    <Panel header={name}>
    <Rating name="read-only" value={n} readOnly />
      <p>
        <small>
          {content}
        </small>
      </p>
    </Panel>
    
    
  </Panel>
    
  )
}
OCards.propTypes={
    name:PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    n:PropTypes.number.isRequired
    
}
export default OCards;
