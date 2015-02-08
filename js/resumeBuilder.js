

var currentwork = {"position":"Head of IT","Employer":"Dalet Ltd.","datess":"10","location":"BeerSheba"};
var education ={"schools":[{"name":"Technological College of Beersheba","dates":"1994","location":"Beersheba","degree":"PC Network technician state diploma"},
    {"name":"Self taught","dates":"1996","location":"Tel Aviv","degree":"MCP's NT4"},
    {"name":"Self taught","dates":"2001","location":"Paris","degree":"MCSE 2000"},
    {"name":"Self taught","dates":"2002","location":"Paris","degree":"CCSA (Ceckpoint system administrator"},
    {"name":"Self taught","dates":"2002","location":"Paris","degree":"Comptia Security+"},
    {"name":"Self taught","dates":"2003","location":"Paris","degree":"Comptia Network+"},
    {"name":"Self taught","dates":"2007","location":"Beersheba","degree":"MCSE2003"}],

    "courses":[{"title":"EMC celera administration","dates":"2010","location":"John Bryce Herzliya","url":"http://www.johnbryce.co.il/"},
        {"title":"NetApp Certified Storage Associate (NCSA)","dates":"2011","location":"Netapp Petah Tikva","url":"http://www.netapp.com/us/services-support/university/certifications/ncsa.aspx"},
        {"title":"EMC Isilon Administration and Management","dates":"2012","location":"John Bryce Herzliya","url":"http://www.johnbryce.co.il/"},
        {"title":"Wireshark Certified Network Analyst (WCNA)","dates":"2012","location":"Beersheba","url":"http://wiresharktraining.com/certification.html"},
        {"title":"Python 3 Essential Training","dates":"2012","location":"Beersheba","url":"http://www.lynda.com/Python-3-tutorials/essential-training/62226-2.html"}

    ]};

var skills = ["system","networking","security","virtualization","scripting"];
var bio = {"name":"Tal Bar-Or","role":"IT Specialist","contact_info":"tbaror@gmail.com","personal_pic":"images/tal_P.jpg",
    "skiils":skills,"welcome_msg":"Welcome to my Curriculum vitae"

};

var formmatedName = HTMLheaderName.replace("%data%",bio.name);
var formmatedRole = HTMLheaderRole.replace("%data%",bio.role);
var formmatedBioPic = HTMLbioPic.replace("%data%",bio.personal_pic);
var formmatedContactInfo = HTMLemail.replace("%data%",bio.contact_info);
var forrmatedSkills = HTMLskills.replace("%data%",bio.skiils);
var formatedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcome_msg);
var formatedPostion = HTMLworkTitle.replace("%data%",currentwork.position);
var formmatedSchoolName = HTMLschoolName.replace("%data%",education.school);

$("#header").append(formatedPostion);
$("#header").append(formmatedSchoolName);
$("#header").prepend(formatedWelcome);
$("#header").prepend(forrmatedSkills);
$("#header").prepend(formmatedContactInfo);
$("#header").prepend(formmatedBioPic);
$("#header").prepend(formmatedRole);
$("#header").prepend(formmatedName);




