import { friends } from "./data.js";

const notificationsContainer = document.querySelector(
  ".notifications_container"
);
const labelUnread = document.querySelector(".unread_notifications");
const labelReadAll = document.querySelector(".top_read_all");

// renders all notifications to the UI
const displayNotifications = function (notifications) {
  notificationsContainer.innerHTML = ``;
  notifications.forEach((notification) => {
    const html = `
  <div class="notifications flex ${notification.status}">
 <img
 class="profile-pic"
 src="images/${notification.profilePic}"
 alt=""
 srcset=""
/>
<div class="notification_details">
 <p><span class="name">${notification.username}</span>
 <span class="activity">${notification.activity}</span>
 <span class='${notification.type !== "message" ? notification.type : ""}'>${
      notification.post || notification.group || ""
    }</span>
 ${
   notification.status === "unread"
     ? `<img
 src="images/—Pngtree—circle clipart red circle_5553126.png"
 alt=""
 class="red-dot"
/>`
     : ""
 }</p>
 <p class="time">${notification.time}</p>
 <p class="${notification.type}">
                ${notification.message || ""}
              </p>
</div>
${
  notification.type === "comment"
    ? `<img
src="images/${notification.pic}"
alt=""
class="admin"
/>`
    : ""
}
</div>
 `;

    notificationsContainer.insertAdjacentHTML("beforeend", html);
  });
};

displayNotifications(friends);

// calculates unread notification
const calcUnread = (notifications) => {
  const unreadNotifications = notifications.filter(
    (notification) => notification.status === "unread"
  ).length;

  return (labelUnread.textContent = unreadNotifications);
};

calcUnread(friends);

//toggles all unread notifications as read
labelReadAll.addEventListener("click", function () {
  friends.forEach((notification) => {
    if (notification.status === "unread") {
      notification.status = "read";
    }
  });

  displayNotifications(friends);
  labelUnread.textContent = 0;
});
