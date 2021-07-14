import React, { useState } from 'react';

const Lists = ({ list, idx, updateList }) => {



    return (
        <div>
            {list}
            <input type="checkbox" checked={list.status} onChange={(e) => updateList(idx)} />
        </div>
    )

}

export default Lists;