var x=document.getElementById("sentBtn");
var count=0;

x.addEventListener('click',()=>{
  const name=  document.getElementById('nameValue');
if(name.value.length!=0)

{
     
    var html=`
    <div  class="user-data-container" id="item${count}">
        <input class="user-name" value="${name.value}"  readonly type="text">
        <button class="edit" onclick="edit(this.id)" id="item${count}" >Edit</button>
        <button class="update" onclick="update(this.id)" id="item${count}" >Update</button>
        <button class="delete" onclick="dele(this.id)" id="item${count}">Delete</button>
    </div>`
    var db=document.getElementsByClassName('user-db-container');
    db[0].insertAdjacentHTML('afterend',html)
  
    count++;
}

   document.getElementById('nameValue').value='';
});

function edit(id){


var nmedit=document.getElementById(id)

      nmedit.childNodes[1].removeAttribute('readonly');

    }

function update(id){
  

try {

    var nmedit=document.getElementById(id)
    if(nmedit.childNodes[1].value.length != 0)
    {
        nmedit.childNodes[1].setAttribute('readonly','')
    }

    else{
          alert('invalid')
    }
    
} catch (error) {
   console.log(error)    
}
};
function dele(id){
   var xuv= document.getElementById(id)
    xuv.innerHTML='';
}



