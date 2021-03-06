import React from 'react';
import ContestPreview from './ContestPreview';
import propTypes, { object } from 'prop-types';

const ContestList = ({contest, onContestClick}) => (
    <div className="container">
        {/**
            * contests from this.state = { object }
            *  - contest type should be array-object
            */}
        {
            Object.keys(contest).map(contestId => 
                <ContestPreview
                    key={contestId}
                    onClick={onContestClick}
                    {...contest[contestId]}
                />
            )
        }
    </div>
)

ContestList.propTypes = {
    contest: object,
    onContestClick: propTypes.func.isRequired
}

module.exports = ContestList;