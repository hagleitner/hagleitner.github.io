hmLoadTopic({
hmKeywords:"",
hmTitle:"Primary Data Processing",
hmDescription:"HsM uses Azure IoT Hub infrastructure for device-to-cloud and cloud-to-device communication.",
hmPrevLink:"data-link-monitoring-service-d.html",
hmNextLink:"operations-guide2.html",
hmParentLink:"backend-infrastructure.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a>",
hmTitlePath:"Backend infrastructure > Primary Data Processing",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Primary Data Processing<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">HsM uses <span class=\"f_Identifier\">Azure IoT Hub<\/span> infrastructure for device-to-cloud and cloud-to-device communication.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Gateways must register with the Azure IoT Hub before they can send messages.<\/p>\n\r<p class=\"p_Normal\">Mobile gateways are registered via the Client Service. There is an enpoint that delivers connsction strings (including the shared access key)<\/p>\n\r<p class=\"p_Normal\">Stationary gateways are registered via the Device provisioning service <\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Communication between the gateways and the IoT hub uses predefined protocols. I.e. the payload of messages is defined in HsM<\/p>\n\r<p class=\"p_Normal\">Following messages are possible<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>HsM Resource Data Protocol v1<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>HsM Resource Data Protocol v2<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>HsM Device Link Status Protocol<\/p><p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">* Routing<\/p>\n\r<p class=\"p_Normal\">Currently not implemented because not needed<\/p>\n\r<p class=\"p_Normal\">Messages of different context can be routed to different event hub<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Consumer Groups <\/p>\n\r<p class=\"p_Normal\">* Current status storge (CSS): <\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Currently goes to table storage<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Will be set to SQL server<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Latest Connected Gateway<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Latest Gateway Type<\/p>\n\r<p class=\"p_Normal\">* Raw value storage<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Content must be redefined<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Structure<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Conversion function<\/p>\n\r<p class=\"p_Normal\">* Time series storage<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* Postgres<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>* <\/p>\n\r<p class=\"p_Normal\">All consumer groups have same retention period -<\/p>\n\r<p class=\"p_Normal\">Check internally for pricing<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Functions are configured to bind to Consumer groups<\/p>\n\r<p class=\"p_Normal\">This binding is same via ARM templates<\/p>\n\r<p class=\"p_Normal\">Functions can be changed to be configurable (To be done) Currently Consumer group is hardcoded<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Connections etc are encoded in the ARM template<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
