document.getElementById("calculate").addEventListener('click', getDay);


function getDay(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();
    

    let date = document.querySelector('.date').value;
    let month= document.querySelector('.month').value;
    let year= document.querySelector('.year').value;

    document.querySelector('.da  te').classList.remove('red-border');
    document.querySelector('.month').classList.remove('red-border');
    document.querySelector('.year').classList.remove('red-border');

    document.querySelector('.labelDay').classList.remove('red-text');
    document.querySelector('.labelMonth').classList.remove('red-text');
    document.querySelector('.labelYear').classList.remove('red-text');

    document.querySelector('.alertDate').innerHTML='';
    document.querySelector('.alertMonth').innerHTML='';
    document.querySelector('.alertYear').innerHTML='';


    if(date.length===0){
        document.querySelector('.alertDate').innerHTML
        ='This field is required' ;
        document.querySelector('.date').classList.add('red-border');
        document.querySelector('.labelDay').classList.add('red-text');
        return; 
    }
    if(month.length===0){
        document.querySelector('.alertMonth').innerHTML
        ='This field is required' ;
        document.querySelector('.month').classList.add('red-border');
        document.querySelector('.labelMonth').classList.add('red-text');
        return; 
    }
    else if(year.length===0){
        document.querySelector('.alertYear').innerHTML
        ='This field is required' ; 
        document.querySelector('.year').classList.add('red-border');
        document.querySelector('.labelYear').classList.add('red-text');
        return;
    } 

    date=parseInt(date);
    month=parseInt(month);
    year=parseInt(year);

    if (date<1 || date>31){
        document.querySelector('.alertDate').innerHTML
            ='Must be a valid date';
            document.querySelector('.date').classList.add('red-border');
            document.querySelector('.labelDay').classList.add('red-text');
            return;
            
    }
    if (month<1 || month>12){
        document.querySelector('.alertMonth').innerHTML
            ='Must be a valid month';
            document.querySelector('.month').classList.add('red-border');
            document.querySelector('.labelMonth').classList.add('red-text');
            return;
    }
    if (year>currentYear){
        document.querySelector('.alertYear').innerHTML
            ='Must be in the past';
            document.querySelector('.year').classList.add('red-border');
            document.querySelector('.labelYear').classList.add('red-text');
            return;
    }

    if (month==4 || month==6 || month==9 || month==11){
        if (date>30){
            document.querySelector('.alertDate').innerHTML
            ='Must be a valid date';
            document.querySelector('.date').classList.add('red-border');
            document.querySelector('.labelDay').classList.add('red-text');
            return;
        } 
        
        }
    if (month==2){
        if (date>29){
            document.querySelector('.alertDate').innerHTML
            ='Must be a valid date';
            document.querySelector('.date').classList.add('red-border');
            document.querySelector('.labelDay').classList.add('red-text');
            return;
        } 
        }  

    

        let ageDate=Math.abs(currentDate-date);
        let ageMonth=Math.abs(currentMonth-month);
        let ageYear=Math.abs(currentYear-year);
    
        
        
        document.querySelector('.ageDate').innerHTML=ageDate;
        document.querySelector('.ageMonth').innerHTML=ageMonth;
        document.querySelector('.ageYear').innerHTML=ageYear;
    
        document.querySelector('.alertDate').innerHTML = '' ;
        document.querySelector('.alertMonth').innerHTML='';
        document.querySelector('.alertYear').innerHTML='';
    
        
        
    
}

