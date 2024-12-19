import { useEffect } from "react";
import styles from './styles/ViewAccess.module.css'
import { isAccess } from "../../../lib/helper/getStatuses";
import { notificationStore } from "#/states/stores/notifications/notificationStore";
import { Access } from "#/common/entities/access";
import { observer } from "mobx-react";

export const ViewAccess = observer(({ notification }: { notification: NotificationType }) => {
    const status = notification.status;
    const message = notification.message;

    useEffect(() => {
        const handleUnload = () => {
            notificationStore.removeNotificationById(notification.id);
        };
        window.addEventListener('beforeunload', handleUnload);
        setTimeout(() => {
            notificationStore.removeNotificationById(notification.id);
        }, 6000);
        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [notification.id])

    return (
        <div className={styles.container}>
            {isAccess(status)
                ? <Access message={message} />
                : null
            }
        </div>

    )
});