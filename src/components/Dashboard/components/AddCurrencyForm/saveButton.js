import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SvgIcon from 'material-ui/SvgIcon';
import Button from 'material-ui/Button';

import styles from './style'



class SaveButton extends React.Component {

  render() {
    const { classes, onClick } = this.props;
    return (

      <div>
        <Button className={classes.btnSave} variant="raised" size="small" onClick={onClick}>
          <SvgIcon 
              style={{marginRight: 10}}>
            <path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
          </SvgIcon>
            Save
          </Button>
      </div>
    );
  }
}

SaveButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles) (SaveButton)