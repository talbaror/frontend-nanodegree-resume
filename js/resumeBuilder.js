

var work = {"jobs":[{"employer":"Dikal Ltd.","title":"Pc network Technician","location":"Beer Sheba","dates":"January 1994-1996","description":" 1st and 2nd level PC's,servers ,network support company customers"},
    {"employer":"Eldor Ltd.","title":"Network System support engineer","location":"Tel Aviv","dates":"December 1996-1999","description":" Bank Hapoalim system network support team , later part of out sourcing team at client customers system network administrator "},
    {"employer":"SCII","title":"Network System engineer consultant","location":"Paris","dates":"January 1999- July 1999","description":"Part of system network admins team at GAN Insurance"},
    {"employer":"CitiGroup France","title":"IT Manager","location":"Paris","dates":"July 1999- June 2004","description":"Incharge of France Citigroup backoffice and agency's information technology and infrastructure"},
    {"employer":"Dalet ltd.","title":"Head of IT","location":"Beer Sheba","dates":"July 2004- To present","description":"Incharge of all Dalet word wide information technology and infrastructure"}
]};

var projects = [{"title":"Active directory 2000 implementation ","dates":2000,"description":"Planing & migrating implementation of company MS NT4 to MS active directory 2000"},
    {"title":"Security base line","dates":2000,"description":"planning and integrating and applying company security policy"},
    {"title":"Establish and Securing 3rd party access","dates":2001,"description":"planning and integrating site to site vpn tunnel and security policy using Check Point firewalls"},
    {"title":"Rapid desktop/servers deployment","dates":2008,"description":"planning and integrating OS images deployment using PXE and FOG product"},
    {"title":"IT Helpdesk establishment ","dates":2009,"description":"Building helpdesk procedure and sla's , establishing company help desk portal"},
    {"title":"Firewall role out","dates":2010,"description":"Pfsense 2.x firewall deployment across all company offices , site to site vpn"},
    {"title":"Wiretrigger tool","dates":2010,"description":"Writing a utility for Support assistance network storage issues troubleshooting"},
    {"title":"Network system monitoring","dates":2011,"description":"Building monitoring platform for monitoring all company aspects"},
    {"title":"Office VOIP deployment","dates":2013,"description":"Elastix distro VOIP deployment at company offices"},
    {"title":"Virtualization platform","dates":2014,"description":"Building visualization platform for qa environment "},
    {"title":"Security center","dates":2014,"description":"Building company central SEIM Security Event and Incident Management to centralize all security event across company"}
];


//var currentwork = {"position":"Head of IT","Employer":"Dalet Ltd.","datess":"10","location":"BeerSheba"};
var education ={"schools":[{"name":"Technological College of Beersheba","dates":"1994","location":"Beersheba","degree":"PC Network technician state diploma"},
    {"name":"Self taught","dates":"1996","location":"Tel Aviv","degree":"MCP's NT4"},
    {"name":"Self taught","dates":"2001","location":"Paris","degree":"MCSE 2000"},
    {"name":"Self taught","dates":"2002","location":"Paris","degree":"CCSA (Ceckpoint system administrator"},
    {"name":"Self taught","dates":"2002","location":"Paris","degree":"Comptia Security+"},
    {"name":"Self taught","dates":"2003","location":"Paris","degree":"Comptia Network+"},
    {"name":"Self taught","dates":"2007","location":"Beersheba","degree":"MCSE2003"}],

    "courses":[{"title":"EMC celera administration","dates":"2010","location":"John Bryce Herzliya","url":"http://www.johnbryce.co.il/"},
        {"title":"Wireshark Certified Network Analyst (WCNA)","dates":"2010","location":"Beersheba","url":"http://wiresharktraining.com/certification.html"},
        {"title":"NetApp Certified Storage Associate (NCSA)","dates":"2011","location":"Netapp Petah Tikva","url":"http://www.netapp.com/us/services-support/university/certifications/ncsa.aspx"},
        {"title":"Python 3 Essential Training","dates":"2011","location":"Beersheba","url":"http://www.lynda.com/Python-3-tutorials/essential-training/62226-2.html"},
        {"title":"JavaScript Essential Training","dates":"2012","location":"Beersheba","url":"http://www.lynda.com/JavaScript-tutorials/JavaScript-Essential-Training/81266-2.html"},
        {"title":"EMC Isilon Administration and Management","dates":"2012","location":"John Bryce Herzliya","url":"http://www.johnbryce.co.il/"},
        {"title":"HTML Essential Training","dates":"2013","location":"Beersheba","url":"http://www.lynda.com/HTML-tutorials/HTML-Essential-Training-2012/99326-2.html"},
        {"title":"CSS Fundamentals","dates":"2013","location":"Beersheba","url":"http://www.lynda.com/Web-Interactive-CSS-tutorials/CSS-Fundamentals/80436-2.html"}
    ]};


var bio = {"details":[{"name":"Tal Bar-Or","role":"IT Specialist","contact_info":"tbaror@gmail.com","personal_pic":"images/tal_P.jpg","welcome_msg":"Welcome to my Curriculum vitae"}],
    "skills":[{"skill":"Operating Systems Knowlege:Windows:NT3.51,4,2000,2003,2008,2012 Linux:Debian,Ubuntu,CentOs,RedHat,Fedora Unix:Solaris,Freebsd"},
    {"skill":"Infra stracture:Ms Dns,Bind Dns,MS DHCP,Linux DHCP ,MS Failover Clustering,MS Active Direcory SQL:MS SQL,MySQL,PostgreSQL,MongoDB Telephony:Elastix,FreeBbx,Asterisk"},
    {"skill":"Firewalls:CheckPoint,Microsoft Forefront,Kerio,Pfsense,IP Tables IDS/IPS:Snort,Suricata,Ossec Nac's:MS NPAS,Packet Fence,Siem:Alien Vault,Security Onion,Snorby,sguil,Elastic Search/Logstach,Gerylogs2,Aanval"},
    {"skill":"Switching:HP Procurve,Cisco Catalyst,Cisco Nexus,Dell Power connect,Dell Force,Mellanox(InfiniBand),VLAN,Routing,L3,VRRP,Multicast,STP Network managment:Metanav,Nedi InfraStructures:Ethernet,Tokenring,InfiniBand,Fiber,Wifi protocols:TCPIP,IPXSPX,SMB"},
    {"skill":"Monitoring:Nagios,Check_MK,Cacti,Icinga,Hyperic,Ntop,Wirshark,MS Network Monitor,Vcops,Pandora FMS,PRTG,Zenoss,Opsview"},
    {"skill":"Hardware:Dell Poweredge,HP Prolient,IBM Series,Cisco USC,Supermicro,Intel Storages:Netapp,EMC celera,EMC Isilon,IBM V7000,HP MSA,Hitache Bluearc,FreeNas,GluterFS"},
    {"skill":"Programing skills:Python 3.x,Javascript,Visual basic script,Autoit,SQL Markup language:HTML5,CSS,Json,xml"}
]};



if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var forrmatedSkills = HTMLskills.replace("%data%",bio.skills[0]);

      $("#skills").append(forrmatedSkills);

    forrmatedSkills = HTMLskills.replace("%data%",bio.skills[1]);

    $("#skills").append(forrmatedSkills);

    forrmatedSkills = HTMLskills.replace("%data%",bio.skills[2]);

    $("#skills").append(forrmatedSkills);

    forrmatedSkills = HTMLskills.replace("%data%",bio.skills[3]);

    $("#skills").append(forrmatedSkills);

}


    for(job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formttedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formttedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formttedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        var formattedEmployerTitle = formattedEmployer + formattedTitle + formttedLocation +formttedDates +formttedDescription;

        $(".work-entry:last").append(formattedEmployerTitle);

    }







