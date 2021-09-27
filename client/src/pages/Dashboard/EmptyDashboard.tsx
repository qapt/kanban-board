import DashboardWrapper from '../../components/Dashboard/DashboardWrapper';
import EmptyDashboardContent from '../../components/Dashboard/EmptyDashboardContent';

const EmptyDashboard = () => {
    return (
        <DashboardWrapper empty={true}>
            <EmptyDashboardContent />
        </DashboardWrapper>
    );
};

export default EmptyDashboard;
