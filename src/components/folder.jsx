import React, { useState } from 'react';
import './folder.css'; // Import the CSS file

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div className="folder-container">
                <div className="folder-header" onClick={() => setExpand(!expand)}>
                    <span>📁 {explorer.name}</span>
                </div>

                <div className="all-file-folders" style={{ display: expand ? "block" : "none" }}>
                    <div className="folder-children">
                        {explorer.children.map((item, index) => (
                            <Folder key={index} explorer={item} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } else {
        return <span className="file">🗄️ {explorer.name}</span>;
    }
};

export default Folder;
