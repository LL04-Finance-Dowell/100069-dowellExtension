// // create alarm for watchdog and fresh on installed/updated, and start fetch data
// chrome.runtime.onInstalled.addListener(() => {
//   console.log("onInstalled....");
//   // scheduleRequest();
//   // scheduleWatchdog();
//   // startRequest();
// });

// // fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
// chrome.runtime.onStartup.addListener(() => {
//   console.log("onStartup....");
//   startRequest();
// });
// // alarm listener
// chrome.alarms.onAlarm.addListener((alarm) => {
//   // if watchdog is triggered, check whether refresh alarm is there
//   if (alarm && alarm.name === "watchdog") {
//     chrome.alarms.get("refresh", (alarm) => {
//       if (alarm) {
//         console.log("Refresh alarm exists. Yay.");
//       } else {
//         // if it is not there, start a new request and reschedule refresh alarm
//         console.log("Refresh alarm doesn't exist, starting a new one");
//         startRequest();
//         scheduleRequest();
//       }
//     });
//   } else {
//     // if refresh alarm triggered, start a new request
//     startRequest();
//   }
// });

// // schedule a new fetch every 30 minutes
// function scheduleRequest() {
//   console.log("schedule refresh alarm to 1 minutes...");
//   chrome.alarms.create("refresh", { periodInMinutes: 1 });
// }
// // schedule a watchdog check every 5 minutes
// function scheduleWatchdog() {
//   console.log("schedule watchdog alarm to 2 minutes...");
//   chrome.alarms.create("watchdog", { periodInMinutes: 2 });
// }

// // fetch data and save to local storage
// async function startRequest() {
//   console.log("start HTTP Request...");
//   chrome.notifications.create(
//     {
//       type: "basic",
//       title: "My Extension",
//       message: "This is a notification from My Extension",
//       iconUrl:
//         "https://images.ctfassets.net/hrltx12pl8hq/7JnR6tVVwDyUM8Cbci3GtJ/bf74366cff2ba271471725d0b0ef418c/shutterstock_376532611-og.jpg",
//     },
//     (notificationId) => {
//       // Notification created successfully
//       console.log(notificationId);
//     }
//   );
//   const data = await fetchRepositories();
//}
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "update") {
    var options = {
      type: "basic",
      title: "Extension Updated",
      message: "Your extension has been updated to the latest version.",
      iconUrl:
        "48.png",
    };
    chrome.notifications.create(options);
  }
});
