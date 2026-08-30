// src/environments/environment.ts
var environment = {
  production: false,
  // Keep false for better debugging on mobile
  apiUrl: "https://app-miniminds.com/api",
  webUrl: "https://app-miniminds.com"
};

// src/app/core/config/api.config.ts
var ApiConfig = class _ApiConfig {
  static BASE_URL = environment.apiUrl;
  static HUB_URL = environment.apiUrl.replace("/api", "");
  static STATIC_URL = environment.apiUrl.replace("/api", "");
  static ENDPOINTS = {
    AUTH: `${_ApiConfig.BASE_URL}/auth`,
    CHILDREN: `${_ApiConfig.BASE_URL}/children`,
    EDUCATORS: `${_ApiConfig.BASE_URL}/teachers`,
    PARENTS: `${_ApiConfig.BASE_URL}/parents`,
    EVENTS: `${_ApiConfig.BASE_URL}/events`,
    EVENT_PARTICIPANTS: `${_ApiConfig.BASE_URL}/eventparticipants`,
    FEES: `${_ApiConfig.BASE_URL}/fees`,
    HOLIDAYS: `${_ApiConfig.BASE_URL}/holidays`,
    LEAVES: `${_ApiConfig.BASE_URL}/leaves`,
    ATTENDANCE: `${_ApiConfig.BASE_URL}/attendance`,
    DAILY_ACTIVITIES: `${_ApiConfig.BASE_URL}/dailyactivities`,
    NOTIFICATIONS: `${_ApiConfig.BASE_URL}/notifications`,
    MESSAGES: `${_ApiConfig.BASE_URL}/messages`,
    CHAT_GROUPS: `${_ApiConfig.BASE_URL}/chatgroups`,
    MAIL: `${_ApiConfig.BASE_URL}/mail`,
    CLASSES: `${_ApiConfig.BASE_URL}/classes`,
    SETTINGS: `${_ApiConfig.BASE_URL}/settings`,
    PAYMENT: `${_ApiConfig.BASE_URL}/Payment`,
    RECLAMATION: `${_ApiConfig.BASE_URL}/Reclamations`,
    PHOTOS: `${_ApiConfig.BASE_URL}/photos`,
    ACTIVITY_COMMENTS: `${_ApiConfig.BASE_URL}/activitycomments`,
    FOOD_ITEMS: `${_ApiConfig.BASE_URL}/fooditems`,
    MENUS: `${_ApiConfig.BASE_URL}/menus`,
    MENU_SELECTIONS: `${_ApiConfig.BASE_URL}/menuselections`,
    DEVICE_TOKENS: `${_ApiConfig.BASE_URL}/devicetokens`,
    TENANTS: `${_ApiConfig.BASE_URL}/tenants`,
    TENANT_FEATURES: `${_ApiConfig.BASE_URL}/tenantfeatures`,
    APPOINTMENTS: `${_ApiConfig.BASE_URL}/appointments`,
    STATIC_FEES: `${_ApiConfig.BASE_URL}/staticfees`,
    NOTIFICATION_PREFERENCES: `${_ApiConfig.BASE_URL}/notificationpreferences`,
    DEMO_REQUESTS: `${_ApiConfig.BASE_URL}/demorequests`
  };
};

export {
  environment,
  ApiConfig
};
//# sourceMappingURL=chunk-XUYKXYA7.js.map
