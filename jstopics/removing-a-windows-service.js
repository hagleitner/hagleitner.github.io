hmLoadTopic({
hmKeywords:"",
hmTitle:"Removing a Windows Service",
hmDescription:"Using PowerShell Note you need to run PowerShell with administrative privileges to modify Windows Services. Removing a Windows Service for the Digital Twin Registration Agent...",
hmPrevLink:"",
hmNextLink:"",
hmParentLink:"common.html",
hmBreadCrumbs:"",
hmTitlePath:"Common > Article numbers",
hmHeader:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Removing a Windows Service<\/span><\/h1>\n\r",
hmBody:"<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Using PowerShell<\/span><\/h1>\n\r<p class=\"p_Normal\">Note you need to run PowerShell with administrative privileges to modify Windows Services.<\/p>\n\r<p class=\"p_Normal\">Removing a Windows Service for the Digital Twin Registration Agent can be done with the <span class=\"f_InlineCode\">Remove-Service<\/span> PowerShell cmdlet. For full documentation of this cmdlet type <span class=\"f_InlineCode\">Get-Help Remove-Service -Online<\/span> &nbsp;in PowerShell. Note that this cmdlet was introduced with PowerShell 6.0 and is not available in previous versions. <\/p>\n\r<p class=\"p_Normal\">General Syntax of the Remove-Service cmdlet:<\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span class=\"f_CodeExample\">Remove-Service&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Name]&nbsp;&lt;String&gt;&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-WhatIf]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[-Confirm]&nbsp;<\/span><\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span style=\"width:1.6250rem;display:inline-block\">&nbsp;<\/span><span class=\"f_CodeExample\">[&lt;CommonParameters&gt;]<\/span><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">The -Name parameter must match the -Name parameter used when <a href=\"run-as-windows-service.html\" class=\"topiclink\">creating<\/a> the Windows Service. Example<\/p>\n\r<p class=\"p_CodeExample\" style=\"page-break-inside: avoid;\"><span class=\"f_CodeExample\">Remove-Service&nbsp;-Name&nbsp;DTRA_Production<\/span><\/p>\n\r<h1 class=\"p_Heading1\"><span class=\"f_Heading1\">Using sc.exe<\/span><\/h1>\n\r<p class=\"p_Normal\">As alternative to the PowerShell cmdlet you can use the <span class=\"f_InlineCode\">sc.exe<\/span> tool<\/p>\n\r<p class=\"p_Normal\">General Syntax of the Remove-Service cmdlet:<\/p>\n\r<p class=\"p_InlineCode\"><span class=\"f_InlineCode\">sc.exe [&lt;servername&gt;] delete [&lt;servicename&gt;]<\/span><\/p>\n\r"
})
