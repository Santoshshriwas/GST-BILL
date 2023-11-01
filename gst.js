function gstCalc(){
   let pn=document.getElementById('pn').value
   let pp=document.getElementById('pp').value
   let pr=document.getElementById('rate').value
   let pq=document.getElementById('pq').value
   let ps=document.getElementById('ps').value
//    alert(pn+" "+pp+" "+pr+" "+pq+" "+ps);
let total=pp*pq;
if(ps==0){
   let SGST = pr/2;
   let CGST = pr/2;
   let pay = total+(total*SGST/100)+(total*CGST/100);
   document.getElementById('tr1').innerHTML="<td>"+pn+"</td><td>RS "+pp+"</td>"+
   "</td><td>"+pq+"</td>"+"</td><td>RS "+total+"</td>";
   document.getElementById('tr2').innerHTML="<td>CGST "+CGST+"%</td><td></td>"+
   "</td><td></td>"+"</td><td>RS "+total*CGST/100+"</td>";
   document.getElementById('tr3').innerHTML="<td>SGST "+SGST+ "%</td><td></td>"+
   "</td><td></td>"+"</td><td>RS"+total*SGST/100+"</td>";
   document.getElementById('tr4').innerHTML="<td>Total</td><td></td>"+
   "</td><td></td>"+"</td><td>RS "+pay+"</td>";
}else{
    let IGST = pr;
    let pay = total+(total*IGST/100);
    document.getElementById('tr1').innerHTML="<td>"+pn+"</td><td>RS "+pp+"</td>"+
    "</td><td>"+pq+"</td>"+"</td><td> RS"+total+"</td>";
    document.getElementById('tr2').innerHTML="";
    document.getElementById('tr3').innerHTML="<td>IGST "+IGST+ "%</td><td></td>"+
    "</td><td></td>"+"</td><td>RS "+total*IGST/100+"</td>";
    document.getElementById('tr4').innerHTML="<td>Total</td><td></td>"+
    "</td><td></td>"+"</td><td>RS "+pay+"</td>";
}
}