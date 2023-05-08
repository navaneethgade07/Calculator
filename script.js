function add(){
    var b;
    var h2 = form.num.value;
    let l = h2.charAt((h2.length)-1);
    if(l =='+' || l =='-' || l == '*' || l == '/'){
         b = h2.substring(0,h2.length-1) + '+';
         form.num.value='';
         form.num.value+=b;

    }
    else{
        form.num.value+='+';
    }
}
function sub(){
    var b;
    var h2 = form.num.value;
    let l = h2.charAt((h2.length)-1);
    if(l =='+' || l =='-' || l == '*' || l == '/'){
         b = h2.substring(0,h2.length-1) + '-';
         form.num.value='';
         form.num.value+=b;

    }
    else{
        form.num.value+='-';
    }
}
function mul(){
    var b;
    var h2 = form.num.value;
    let l = h2.charAt((h2.length)-1);
    if(l =='+' || l =='-' || l == '*' || l == '/'){
         b = h2.substring(0,h2.length-1) + '*';
         form.num.value='';
         form.num.value+=b;

    }
    else{
        form.num.value+='*';
    }
}
function div(){
    var b;
    var h2 = form.num.value;
    let l = h2.charAt((h2.length)-1);
    if(l =='+' || l =='-' || l == '*' || l == '/'){
         b = h2.substring(0,h2.length-1) + '/';
         form.num.value='';
         form.num.value+=b;

    }
    else{
        form.num.value+='/';
    }
}