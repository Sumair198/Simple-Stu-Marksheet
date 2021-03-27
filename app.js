document.write("STUDENT MARKSHEET:");
document.write("<br>");

var a,b,c,d,e,sum,z


a= +prompt("Enter your English Marks : ")
if (a>=60 && a<100 )
{
    document.write('English Marks Is :' + a + "Pass");
}
else if(a<60)
{
    document.write('English Marks Is :' + a + "Fail");
}
else{
    document.write('English marks: invalid marks')
    
}
document.write("<br>");
b= +prompt("Enter your Urdu Marks : ")
if (a>=60 && a<100 )
{
    document.write('Urdu Marks Is :' + b + "Pass");
}
else if(a<60)
{
    document.write('Urdu Marks Is :' + b + "Fail");
}
else{
    document.write('Urdu marks: invalid marks')
    
}
document.write("<br>");
c= +prompt("Enter your Chemistry Marks : ")
if (a>=60 && a<100 )
{
    document.write('Chemistry Marks Is :' + c + "Pass");
}
else if(a<60)
{
    document.write('Chemistry Marks Is :' + c + "Fail");
}
else{
    document.write('Chemistry marks: invalid marks')
    
}
document.write("<br>");
d= +prompt("Enter your Physics Marks : ")
if (a>=60 && a<100 )
{
    document.write('Physics Marks Is :' + d + "Pass");
}
else if(a<60)
{
    document.write('Physics Marks Is :' + d + "Fail");
}
else{
    document.write('Physics marks: invalid marks')
    
}
document.write("<br>");
e= +prompt("Enter your Math Marks : ")
if (a>=60 && a<100 )
{
    document.write('Math Marks Is :' + e + "Pass");
}
else if(a<60)
{
    document.write('Math Marks Is :' + e + "Fail");
}
else{
    document.write('Math marks: invalid marks')
    
}
document.write("<br>");
document.write("<hr>");

sum = a+b+c+d+e;
document.write("total Marks Is : " +sum);
document.write("<br>");
document.write("<hr>");

z=500;


x = sum/z;

y = x*100;

document.write("Your Percentage Is : " + y);
document.write("<br>");
document.write("<hr>");


if (y>=80  && y<=100 )
{
    document.write("Your Garde is A+ ");
}
else if (y>=70 && y<=80)
{
    document.write("Your Garde is A ");
}
else if (y>=60 && y<=70)
{
    document.write("Your Garde is B ");
}
else if (y>=50 && y<=60)
{
    document.write("Your Garde is C ");
}
else
{
    document.write("Grade Fail !");
}