import styles from './styles/NotificationDistributor.module.css'
import { ViewError } from "../components/viewError";
import { ViewAccess } from "../components/viewAccess";
import { observer } from 'mobx-react';
import { notificationStore } from '#/states/stores/notifications/notificationStore';
import { ViewPending } from '../components/viewPending';

export const NotificationDistributor = observer(({ id }: { id: string }) => {
    const notifications = notificationStore.notifications;
    const relevants = notifications.filter(notification => notification.id.includes(id));

    if (relevants.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            {relevants.map(notification => {
                if (notification.type === 'error') {
                    return <ViewError key={notification.id} notification={notification} />;
                }
                if (notification.type === 'info') {
                    return <ViewPending key={notification.id} notification={notification} />;
                }
                if (notification.type === 'success') {
                    return <ViewAccess key={notification.id} notification={notification} />;
                }
                return null;
            })}
        </div>
    );
});