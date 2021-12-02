const list=document.querySelector('ul');
      const input=document.querySelector('input');
      const button=document.querySelector('button');
      

      button.onclick=function(){
        let myItem=input.value;
        input.value='';

        const listItem=document.createElement('li');
        const listText=document.createElement('span');
        const listBtn=document.createElement('button');
        const listBtn1=document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent=myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent='Delete';
        listItem.appendChild(listBtn1);
                listBtn1.textContent = 'Edit';


        list.appendChild(listItem);
      listBtn.onclick=function(e){
           if(confirm('Are you sure to delete?')){
            list.removeChild(listItem);
           }
                 }

          listBtn1.onclick=function(e){
            list.removeChild(listItem);
            const editwish=prompt("Write more correctly wish...");
            listItem.appendChild(listText);
            listText.textContent=editwish;
            listItem.appendChild(listBtn);
            listItem.appendChild(listBtn1);
            list.appendChild(listItem);
          }
        
        input.focus();
}focus();
      }
