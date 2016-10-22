var oc_debug=false;
var oc_isadmin=false;
var oc_webroot="";
var oc_appswebroots={"files":"/apps/files","activity":"/apps/activity","admin_audit":"/apps/admin_audit","enterprise_key":"/apps/enterprise_key","files_pdfviewer":"/apps/files_pdfviewer","files_sharing":"/apps/files_sharing","files_sharing_log":"/apps/files_sharing_log","files_texteditor":"/apps/files_texteditor","files_trashbin":"/apps/files_trashbin","files_versions":"/apps/files_versions","files_videoviewer":"/apps/files_videoviewer","firewall":"/apps/firewall","firstrunwizard":"/apps/firstrunwizard","gallery":"/apps/gallery","notifications":"/apps/notifications","provisioning_api":"/apps/provisioning_api","templateeditor":"/apps/templateeditor","user_ldap":"/apps/user_ldap","windows_network_drive":"/apps/windows_network_drive"};
var datepickerFormatDate="M\/d\/yy";
var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayNamesShort=["Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat."];
var dayNamesMin=["Su","Mo","Tu","We","Th","Fr","Sa"];
var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
var monthNamesShort=["Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
var firstDay=0;
var oc_config={"session_lifetime":"1440","session_keepalive":true,"version":"8.2.1.4","versionstring":"8.2.1","enable_avatars":true};
var oc_appconfig={"core":{"defaultExpireDateEnabled":false,"defaultExpireDate":null,"defaultExpireDateEnforced":null,"enforcePasswordForPublicLink":false,"sharingDisabledForUser":false,"resharingAllowed":true,"remoteShareAllowed":true,"federatedCloudShareDoc":"https:\/\/doc.owncloud.org\/server\/8.2\/go.php?to=user-sharing-federated"}};
var oc_defaults={"entity":"Simon Fraser University","name":"Simon Fraser University","title":"SFU Vault","baseUrl":"https:\/\/www.sfu.ca\/","syncClientUrl":"http:\/\/www.sfu.ca\/sfuvault-download","docBaseUrl":"https:\/\/doc.owncloud.org","slogan":"Vault: safe and secure storage in the SFU Data Centre","logoClaim":"","shortFooter":"\u00a9 2014 <a href=\"https:\/\/www.sfu.ca\/\" target=\"_blank\">Simon Fraser University<\/a> \u2013 Vault: safe and secure storage in the SFU Data Centre","longFooter":"\u00a9 2014 <a href=\"https:\/\/www.sfu.ca\/\" target=\"_blank\">Simon Fraser University<\/a><br\/>Vault: safe and secure storage in the SFU Data Centre","folder":"themes"};
var licenseKeyDaysLeft=104;
var licenseKeyNotice="Your license key will expire in 104 days.";
