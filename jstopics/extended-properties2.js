hmLoadTopic({
hmKeywords:"",
hmTitle:"Extended Properties",
hmDescription:"Each device type can have definitions for extended properties. Extended properties are properties of devices that are instance of a defined device type that will be part of the...",
hmPrevLink:"display-groups2.html",
hmNextLink:"problem-types.html",
hmParentLink:"catalog-service.html",
hmBreadCrumbs:"<a href=\"neutral-backend-infrastructure.html\">Neutral backend infrastructure<\/a> &gt; <a href=\"catalog-service.html\">Catalog Service<\/a>",
hmTitlePath:"Neutral backend infrastructure > Catalog Service > Extended Properties",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Extended Properties<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Each device type can have definitions for extended properties. Extended properties are properties of devices that are instance of a defined device type that will be part of the information stored for this device in the Digital Twin Service.<\/p>\n\r<p class=\"p_Normal\">Example: The WLAN SSID, WLAN Password and Root password of Stationary Gateways are generated during production and configured individually for each gateway. These properties are defined in the Catalog Service for the device type Stationary Gateway, the actual values are persisted with the Digital Twin Service.<\/p>\n\r<p class=\"p_Normal\">An extended property definition in the Catalog Service consists of<\/p>\n\r<p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Key: A non-empty alphanumeric string that uniquely identifies the property within the device type. The key is case insensitive.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Description (a <a href=\"catalog-element-description.html\" class=\"topiclink\">Catalog Element Description<\/a>)<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span><a href=\"visibility.html\" class=\"topiclink\">Visibility<\/a>: Defines who shall be able to see the data. <\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Mandatory: Mandatory properties must be defined for every device of this type in the Digital Twin Service. <\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Changeability: Defines if the value for the extended property stored in the Digital Twin Service can be changed throughout the life-cycle of the digital twin.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Initial set only: The property can only be set during the first registration of the digital twin.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 1.6250rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: \'Courier New\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">o<\/span>Changeable: The extended property\'s value can be changed at any time.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>Secret: This is a display hint to clients that the value of this property is something like a password, that should not be displayed in clear text.<\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>DataType: Defines the data type that is used to store values for this property. <\/p><p class=\"p_Normal\" style=\"text-indent: 0; padding-left: 0.8125rem; margin-left: 0;\"><span class=\"f_Normal\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:0.8125rem;margin-left:-0.8125rem\">&#8226;<\/span>ProductionMapping: Defines how the value for this property is mapped in production systems, i.e. how the production system gets this value. Example:<\/p>"
})
