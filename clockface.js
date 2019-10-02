var whatTimeIsIt = function(angle) {
    var totalMinutes = Math.floor(angle/.5);
    var hours = Math.floor(totalMinutes/60);
    var minutes = totalMinutes % 60;
    
    if(hours === 0) {
      hours = '12';
    }  
    if(angle === 0) {
      return '12:00';
    }
    if(String(minutes).length < 2) {
      minutes = 0 + String(minutes);
    }
    if(String(hours).length < 2) {
      hours = 0 + String(hours);
    }
    return hours + ":" + minutes;
    }
    
    whatTimeIsIt(15)
  
  