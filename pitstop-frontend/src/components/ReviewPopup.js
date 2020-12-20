import React from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

const ReviewPopup = (props) => {
    return (
        <div>
            <Button id="PopoverFocus" type="button">
                {props.name}
      </Button>
            <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                <PopoverHeader>{props.name}</PopoverHeader>
                <PopoverBody>{props.review}</PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

export default ReviewPopup;