const ShowBMI1 = document.querySelector("#ShowBMI1");
const ShowBMI2 = document.querySelector("#ShowBMI2");
const CheckBMI = document.querySelector("#CheckBMI");
// Data
const MarksW = 78;
const MarksH = 1.69;
const JohnW = 92;
const JohnH = 1.95;
const MarksBMI = MarksW / (MarksH * MarksH);
const JohnBMI = JohnW / (JohnH * JohnH);

ShowBMI1.innerHTML = MarksBMI;
ShowBMI2.innerHTML = JohnBMI;
// CheckBMI.innerHTML = ;
if (MarksBMI > JohnBMI)
{
    CheckBMI.innerHTML = 'Mark có chỉ số BMI là ' + (MarksBMI) + ' cao hơn John ' + (JohnBMI);  
}
else
{
    CheckBMI.innerHTML =  'John có chỉ số BMI là ' + (JohnBMI) + ' cao hơn Mark ' + (MarksBMI);  
}
