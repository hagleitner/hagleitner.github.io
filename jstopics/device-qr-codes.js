hmLoadTopic({
hmKeywords:"",
hmTitle:"HsMDevice QR Codes",
hmDescription:"Some HsM device components have stickers on them with a QR code that carries information about device the component belongs to (at the time of production) or its components.",
hmPrevLink:"v3.html",
hmNextLink:"article-numbers.html",
hmParentLink:"common.html",
hmBreadCrumbs:"<a href=\"common.html\">Common<\/a>",
hmTitlePath:"Common > HsMDevice QR Codes",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">HsMDevice QR Codes<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Some HsM device components have stickers on them with a <a href=\"https:\/\/en.wikipedia.org\/wiki\/QR_code\" target=\"_blank\" class=\"weblink\">QR code<\/a> that carries information about device the component belongs to (at the time of production) or its components.<\/p>\n\r<p class=\"p_Normal\">Usually the contents of the QR code are also printed as human readable text next to the QR code.<\/p>\n\r<p class=\"p_Normal\">The contents of the QR Code is a UTF-8 encoded string without <span style=\"font-style: italic;\">Byte order Mark<\/span> that carries several data fields. <\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:100%; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:6.5625rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Data field<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:10.9375rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Location in string<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:30.5625rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Description<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Data type<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters up to the first hyphen (U+002D, 0x2D)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Version<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters after the first hyphen to the second hyphen (U+002D, 0x2D)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Product type code<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters after the second hyphen (U+002D, 0x2D up to the third hyphen.<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The product type code of the device type this QR code is on.<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Article number<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters after the third hyphen (U+002D, 0x2D up to the first new line (<span style=\"font-size: 1.10rem; color: #242729; background-color: #ffffff;\">U+000A, 0x0A<\/span>)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><br \/>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\"><a href=\"serial-numbers.html\" class=\"topiclink\">Serial number<\/a><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters between the first and the second new line (<span style=\"font-size: 1.10rem; color: #242729; background-color: #ffffff;\">U+000A, 0x0A<\/span>)<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">The serial number of the device or one of the components of the device<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:6.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Network id<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.9375rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">All characters after the second new line (<span style=\"font-size: 1.10rem; color: #242729; background-color: #ffffff;\">U+000A, 0x0A<\/span>) <\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:30.5625rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Encodes a network identity e.g. the MAC address or the blUUID of a component<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\"><a id=\"fig_15d7fe\" class=\"hmanchor\"><\/a>Table 1: Contents of the HsM Device QR code<\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Example<\/span><\/h1>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table style=\"width:100%; border:none; border-spacing:0; border-collapse:collapse;\">\n\r<thead>\n\r<tr>\n\r<th style=\"vertical-align:top; width:10.3125rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">QR Code<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; width:10.1875rem; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">String content<\/p>\n\r<\/th>\n\r<th style=\"vertical-align:top; background-color:#DCDCDC; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Decoded information<\/p>\n\r<\/th>\n\r<\/tr>\n\r<\/thead>\n\r<tbody>\n\r<tr>\n\r<td style=\"vertical-align:top; width:10.3125rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\"><img alt=\"QR Code Sample 01\" style=\"margin:0;width:10.2500rem;height:10.2500rem;border:none\" src=\".\/images\/hmfile_hash_3bfb4312.png\"\/><\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:10.1875rem; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">50-02-2008-444433332222<\/p>\n\r<p class=\"p_Normal\">201105TTT0008<\/p>\n\r<p class=\"p_Normal\">bd29a08243dcaff4<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; padding:0; border:solid thin #c0c0c0;\"><p class=\"p_Normal\">Data type: <span class=\"f_InlineCode\">50<\/span><\/p>\n\r<p class=\"p_Normal\">Version: <span class=\"f_InlineCode\">02<\/span><\/p>\n\r<p class=\"p_Normal\">Product type code: <span class=\"f_InlineCode\">2008<\/span><\/p>\n\r<p class=\"p_Normal\">Serial number: <span class=\"f_InlineCode\">201105TTT0008<\/span><\/p>\n\r<p class=\"p_Normal\">Network id: <span class=\"f_InlineCode\">bd29a08243dcaff4<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/tbody>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\"><a id=\"fig_29f12d\" class=\"hmanchor\"><\/a>Table 2: Examples of HsM Device QR Codes<\/p>\n\r"
})
