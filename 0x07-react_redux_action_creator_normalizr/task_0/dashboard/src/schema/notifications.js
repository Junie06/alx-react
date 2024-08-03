import * as notificationData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userID) {
    return notificationData.filter((notification) => notification.author.id === userID).map((notification) => notification.context)
}