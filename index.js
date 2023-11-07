document.getElementById("calculate").addEventListener('click', getDay);
 
function getDay(){
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDate = new Date().getDate();
    
    let m=[31,28,31,30,31,30,31,31,30,31,30,31];

    let date = document.querySelector('.date').value;
    let month= document.querySelector('.month').value;
    let year= document.querySelector('.year').value;

     
    document.querySelector('.date').classList.remove('red-border');
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
  
    let ageYear=currentYear-year;
    let ageDate=currentDate-date;
    let ageMonth=currentMonth-month;


    if (ageDate<0){
        ageMonth=ageMonth-1;
        ageDate=ageDate+m[currentMonth-1];
    }

    if (ageMonth<0){
        ageYear=ageYear-1;
        ageMonth=ageMonth+12;
    }
  
    document.querySelector('.ageDate').innerHTML=ageDate;
    document.querySelector('.ageMonth').innerHTML=ageMonth;
    document.querySelector('.ageYear').innerHTML=ageYear;

    document.querySelector('.alertDate').innerHTML = '' ;
    document.querySelector('.alertMonth').innerHTML='';
    document.querySelector('.alertYear').innerHTML='';
    
        
        
    
}

