import React from 'react';
import { Link } from 'react-router-dom';

const Selection = () => {
    return (
        <div className='selection'>
            <div className='container'>
                <div className='select-round'>
                    <Link className="link" to="/view-question/1">Phần I</Link>
                    <Link className="link" to="/view-question/2">Phần II</Link>
                    {/*<Link className="link" to="/view-question/3">Phần III</Link>*/}
                </div>
            </div>
        </div>
    )
}

export default Selection;