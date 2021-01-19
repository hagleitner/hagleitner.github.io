hmLoadTopic({
hmKeywords:"",
hmTitle:"Presented data link status",
hmDescription:"Non gateway de   The data link between a non-gateway device and the backend can be in one of the following states: Not connected via stationary gateway: Non-gateway device was n",
hmPrevLink:"data-link-monitoring-protocol.html",
hmNextLink:"non-gateway-devices.html",
hmParentLink:"data-link-monitoring-service.html",
hmBreadCrumbs:"<a href=\"backend-infrastructure.html\">Backend infrastructure<\/a> &gt; <a href=\"data-link-monitoring-service.html\">Data Link Monitoring Service<\/a>",
hmTitlePath:"Backend infrastructure > Data Link Monitoring Service > Presented data link status",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Presented data link status<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\" style=\"line-height: 2.33; background: #ffffff; margin: 1.6250rem 0 0 0;\">Non gateway de<\/h1>\n\r<h1 class=\"p_Heading1\" style=\"line-height: 2.33; background: #ffffff; margin: 1.6250rem 0 0 0;\"><a id=\"non-gateway-devices\" class=\"hmanchor\"><\/a><\/h1>\n\r<p class=\"p_Normal\"> The data link between a non-gateway device and the backend can be in one of the following states:<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">1.<\/span>Not connected via stationary gateway: Non-gateway device was never connected via stationary gateway, backend decided that no stationary gateway connection is expected, some user defined that no stationary gateway connection is detected.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.2500rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">2.<\/span>Online: The data-link between the non-gateway device and the gateway is established and the data link between this stationary gateway and the HsM backend system is established. Data sent by the non-gateway device will be immediately delivered to the HsM backend systems, data sent by the HsM backend systems &nbsp;will be immediately delivered to the non-gateway devices.<\/p><p style=\"text-indent: -0.8125rem; line-height: 2.3; margin: 0.2500rem 0 0 2.5000rem;\"><a id=\"2a1e4b1d-8133-4e82-8bec-6a1e1fb000ba\" class=\"hmanchor\"><\/a><\/p>\n\r<p style=\"text-indent: 0; line-height: 2.3; padding-left: -0.4375rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">3.<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; font-weight: bold; color: #172b4d;\">Offline<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">: <\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d; background-color: #fff0b3;\">The non-gateway has never been connected to the HsM backend systems via a stationary gateway<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\"> or a previously established data link has been broken for more than 24 h.<\/span><\/p><h3 style=\"line-height: 2.3; background: #ffffff; margin: 2.0000rem 0 0 0;\"><a id=\"backend-decided-that-no-stationary-gateway-connection-is-expected\" class=\"hmanchor\"><\/a><\/h3>\n\r<p style=\"text-indent: 0; line-height: 2.3; padding-left: 0.8125rem; margin: 0 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';color:#172B4D;display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">Location of device is changed (from room up)<\/span><\/p><p style=\"text-indent: 0; line-height: 2.3; padding-left: 0.8125rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';color:#172B4D;display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">Assigned to a different customer<\/span><\/p><p style=\"text-indent: 0; line-height: 2.3; padding-left: 0.8125rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';color:#172B4D;display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">when stationary-gateway is de-installed: All devices that where last registered with this stationary-gatway will be set to <\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; font-style: italic; color: #172b4d;\">not connected via stationary gateway.<\/span><\/p><h1 class=\"p_Heading1\" style=\"line-height: 2.33; background: #ffffff; margin: 1.6250rem 0 0 0;\"><a id=\"gateway-devices\" class=\"hmanchor\"><\/a><\/h1>\n\r<p class=\"p_Normal\" style=\"line-height: 2.3; background: #ffffff; margin: 0 0 0 0;\"><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">In HsM stationary gateways are also handled as HsM devices therefore those gateways also have a data-link status.<\/span><\/p>\n\r<p style=\"text-indent: 0; line-height: 2.3; padding-left: 1.2500rem; margin: 0 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: \'Segoe UI\';color:#172B4D;display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">1.<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; font-weight: bold; color: #172b4d;\">Never connected to backend:<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\"> Gateway has never had a connection to the backend system (e.g. network configuration was not made correctly)<\/span><\/p><p style=\"text-indent: 0; line-height: 2.3; padding-left: 1.2500rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: \'Segoe UI\';color:#172B4D;display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">2.<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; font-weight: bold; color: #172b4d;\">Online<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">: The data-link between the stationary gateway and the HsM backend system is established. Data sent by the stationary-gateway device will be immediately delivered to the HsM backend systems, data sent by the HsM backend systems will be immediately delivered to the stationary-gateway device.<\/span><\/p><p style=\"text-indent: 0; line-height: 2.3; padding-left: 1.2500rem; margin: 0.2500rem 0 0 1.6875rem;\"><span class=\"f_Normal\" style=\"font-size:1.20rem; font-family: \'Segoe UI\';color:#172B4D;display:inline-block;width:1.2500rem;margin-left:-1.2500rem\">3.<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; font-weight: bold; color: #172b4d;\">Offline<\/span><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\">: A previously established data link has been broken.<\/span><\/p><p class=\"p_Normal\" style=\"line-height: 2.3; background: #ffffff; margin: 0 0 0 0;\"><span style=\"font-size: 1.20rem; font-family: \'Segoe UI\',Tahoma,Verdana,Arial,sans-serif; color: #172b4d;\"> <\/span><span style=\"background-color: #ffffff;\">Enter topic text here.<\/span><\/p>\n\r"
})
