import styles from './styles/ViewPending.module.css';
import { observer } from "mobx-react";
import { Pending } from '#/common/entities/pending';

export const ViewPending = observer(({ notification }: { notification: NotificationType }) => {
    const message = notification.message;
    console.log(notification.isLoading)

    return (
        <div className={styles.container}>
            <Pending message={message} />
        </div>

    )
});