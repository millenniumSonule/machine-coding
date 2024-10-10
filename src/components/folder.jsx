import React, { useState } from 'react';

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div>
                <div onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                </div>

                <div className='all-file-folders' style={{ display: expand ? "block" : "none", marginTop: 5 }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {explorer.children.map((item, index) => {
                            return (
                                <Folder key={index} explorer={item} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        // Add the return statement here
        return <span>🗄️ {explorer.name}</span>;
    }
};

export default Folder;
