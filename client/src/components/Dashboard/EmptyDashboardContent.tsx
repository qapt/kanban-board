import React from 'react';
import AddProjectButton from '../Project/AddProjectButton';

const EmptyDashboardContent = () => {
    return (
        <div>
            <div>Select a project from the sidebar.</div>
            <div>No projects? Create a new one</div>
            <AddProjectButton />
        </div>
    );
};

export default EmptyDashboardContent;
