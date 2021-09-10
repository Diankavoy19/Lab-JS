alert('Hell');

function valute()
        {
    var hr = document.getElementById("hr");
    var eu = document.getElementById("eu");
    var dl = document.getElementById("dl");
    var zl = document.getElementById("zl");
    var ck = document.getElementById("ck");
    var rb = document.getElementById("rb");
    
    if(hr.value != '')
    {
        
        eu.value = parseFloat(hr.value) * 0.037;
        dl.value = parseFloat(hr.value) * 0.041;
        zl.value = parseFloat(hr.value) * 0.16;
        ck.value = parseFloat(hr.value) * 0.93;
        rb.value = parseFloat(hr.value) * 2.95;
        
    }
    else if(eu.value != ''){
        
         hr.value = parseFloat(eu.value) * 27.5;
        dl.value = parseFloat(eu.value) * 1.11;
        zl.value = parseFloat(eu.value) * 4.33;
        ck.value = parseFloat(eu.value) * 25.55;
        rb.value = parseFloat(eu.value) * 85.74;
        
    }
    else if(dl.value != '')
    {
        
        
         hr.value = parseFloat(dl.value) * 24.7;
        eu.value = parseFloat(dl.value) * 0.9;
        zl.value = parseFloat(dl.value) * 3.95;
        ck.value = parseFloat(dl.value) * 23.92;
        rb.value = parseFloat(dl.value) * 74.94;
        
    }
    else if(zl.value != '')
    {
        
        
         hr.value = parseFloat(zl.value) * 6.1;
        eu.value = parseFloat(zl.value) * 0.21;
        dl.value = parseFloat(zl.value) * 0.24;
        ck.value = parseFloat(zl.value) * 5.45;
        rb.value = parseFloat(zl.value) * 19.85;
        
    }
    else if(ck.value != '')
    {
        
         hr.value = parseFloat(ck.value) * 1.14;
        eu.value = parseFloat(ck.value) * 0.04;
        dl.value = parseFloat(ck.value) * 0.04;
        zl.value = parseFloat(ck.value) * 0.17;
        rb.value = parseFloat(ck.value) * 2.51;
        
    }
   
    else if(rb.value != '')
    {
        
        
        hr.value = parseFloat(rb.value) * 0.34;
        eu.value = parseFloat(rb.value) * 0.01;
        dl.value = parseFloat(rb.value) * 0.01;
        zl.value = parseFloat(rb.value) * 0.05;
        ck.value = parseFloat(rb.value) * 0.3;
        
    }
} 