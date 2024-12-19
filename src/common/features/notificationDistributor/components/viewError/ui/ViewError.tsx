import { useEffect } from "react";
import styles from './styles/ViewError.module.css'
import { isDenied, isError } from "../../../lib/helper/getStatuses";
import { notificationStore } from "#/states/stores/notifications/notificationStore";
import { Denied } from "#/common/entities/denied";
import { Error } from "#/common/entities/error";
import { observer } from "mobx-react";

export const ViewError = observer(({ notification }: { notification: NotificationType }) => {
    const status = notification.status;
    const message = notification.message;
    console.log(message)
    useEffect(() => {
        if (!notification) return;

        const handleUnload = () => {
            notificationStore.removeNotificationById(notification.id);
        };
        window.addEventListener('beforeunload', handleUnload);
        const timeout = setTimeout(() => {
            notificationStore.removeNotificationById(notification.id);
        }, 6000);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, [notification.id, notification])

    if (!notification) {
        return null;
    }

    return (
        <div className={styles.container}>
            {isError(status)
                ? <Error message={message} />
                : isDenied(status)
                    ? <Denied message={message} />
                    : null
            }
        </div>

    )
});