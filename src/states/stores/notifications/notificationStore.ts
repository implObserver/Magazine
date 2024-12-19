import { types } from "mobx-state-tree";
import { signUpMonitorStore } from "../../subStores/userAuth/signup/model/store/signupMonitorStore";
import { reaction } from "mobx";
import { loginMonitorStore } from "#/states/subStores/userAuth/login/model/store/loginMonitor";

const NotificationModel = types.model("Notification", {
    id: types.string,
    message: types.string,
    status: types.number,
    isLoading: types.boolean,
    type: types.enumeration("Type", ["info", "success", "error"]),
});

// Модель и хранилище уведомлений
const NotificationStore = types
    .model("NotificationStore", {
        notifications: types.array(NotificationModel),
        maxNotifications: types.optional(types.number, 10),
    })
    .actions((self) => ({
        addNotification(
            id: string,
            message: string,
            status: number,
            type: "info" | "success" | "error",
            isLoading: boolean,
        ) {
            // Проверка на дубли
            if (self.notifications.some((n) => n.message === message && n.type === type)) return;

            // Удаляем самое старое уведомление, если превышен лимит
            if (self.notifications.length >= self.maxNotifications) {
                self.notifications.shift();
            }

            // Добавляем новое уведомление
            self.notifications.push({ id, message, status, type, isLoading });
        },

        removeNotificationById(id: string) {
            self.notifications.replace(
                self.notifications.filter((n) => n.id !== id)
            );
        },

        clearNotifications() {
            self.notifications.clear();
        },

        removeNotificationsByType(type: "info" | "success" | "error") {
            self.notifications.replace(self.notifications.filter((n) => n.type !== type));
        },
    }));

export const notificationStore = NotificationStore.create({
    notifications: [],
});

reaction(
    () => ({
        isLoading: signUpMonitorStore.isLoading,
        error: signUpMonitorStore.error,
        successMessage: signUpMonitorStore.successMessage,
        status: signUpMonitorStore.status,
        info: signUpMonitorStore.info,
    }),
    ({ isLoading, error, successMessage, info, status }) => {
        console.log(error)
        if (isLoading) {
            notificationStore.addNotification('signup_pending', info, status, "info", isLoading);
        } else {
            notificationStore.removeNotificationById('signup_pending');
        }

        if (error) {
            notificationStore.addNotification('signup_error', `Ошибка: ${error}`, status, "error", isLoading);
        } else {
            notificationStore.removeNotificationsByType("error");
        }

        if (successMessage) {
            notificationStore.addNotification('signup_success', successMessage, status, "success", isLoading);
        }
    },
    { fireImmediately: true }
);

reaction(
    () => ({
        isLoading: loginMonitorStore.isLoading,
        error: loginMonitorStore.error,
        successMessage: loginMonitorStore.successMessage,
        status: loginMonitorStore.status,
        info: loginMonitorStore.info,
    }),
    ({ isLoading, error, successMessage, info, status }) => {
        console.log(error)
        if (isLoading) {
            notificationStore.addNotification('login_pending', info, status, "info", isLoading);
        } else {
            notificationStore.removeNotificationById('login_pending');
        }

        if (error) {
            notificationStore.addNotification('login_error', `Ошибка: ${error}`, status, "error", isLoading);
        } else {
            notificationStore.removeNotificationsByType("error");
        }

        if (successMessage) {
            notificationStore.addNotification('login_success', successMessage, status, "success", isLoading);
        }
    },
    { fireImmediately: true }
);