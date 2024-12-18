import { types } from "mobx-state-tree";
import { signUpMonitorStore } from "../stores/userAuth/signup/model/store/signupMonitorStore";
import { reaction } from "mobx";

const NotificationModel = types.model("Notification", {
    message: types.string,
    type: types.enumeration("Type", ["info", "success", "error"]),
});

// Модель и хранилище уведомлений
const NotificationStore = types
    .model("NotificationStore", {
        notifications: types.array(NotificationModel),
        maxNotifications: types.optional(types.number, 10),
    })
    .actions((self) => ({
        addNotification(message: string, type: "info" | "success" | "error", timeout = 5000) {
            // Проверка на дубли
            if (self.notifications.some((n) => n.message === message && n.type === type)) return;

            // Удаляем самое старое уведомление, если превышен лимит
            if (self.notifications.length >= self.maxNotifications) {
                self.notifications.shift();
            }

            // Добавляем новое уведомление
            self.notifications.push({ message, type });

            // Удаление уведомления по таймауту
            setTimeout(function () {
                // Используем обычную функцию, чтобы правильно сохранить контекст `self`
                const index = self.notifications.findIndex(
                    (n) => n.message === message && n.type === type
                );
                if (index !== -1) {
                    self.notifications.splice(index, 1);
                }
            }, timeout);
        },

        removeNotification(index: number) {
            if (index >= 0 && index < self.notifications.length) {
                self.notifications.splice(index, 1);
            }
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

// Реакция на изменения в процессе регистрации
reaction(
    () => ({
        isLoading: signUpMonitorStore.isLoading,
        error: signUpMonitorStore.error,
        successMessage: signUpMonitorStore.successMessage,
    }),
    ({ isLoading, error, successMessage }) => {
        if (isLoading) {
            notificationStore.addNotification("Регистрация в процессе...", "info");
        }

        if (error) {
            notificationStore.addNotification(`Ошибка: ${error}`, "error");
        } else {
            // Удаляем все уведомления об ошибках
            notificationStore.removeNotificationsByType("error");
        }

        if (successMessage) {
            notificationStore.addNotification(successMessage, "success");
        }
    },
    { fireImmediately: true }
);